import { createClient } from 'newt-client-js'
import { Query } from 'newt-client-js/dist/types/types'
import { sponsors as fallbackSponsors } from '~/utils/newt.constants'
import { ISponsor, Rank } from '~/types/sponsors'

type SponsorGroups = Record<Rank, ISponsor[]>

const sponsorRanks: Rank[] = [
  'platinum',
  'gold',
  'silver',
  'bronze',
  'specialMedia',
  'media',
  'streaming',
  'dinner',
]

function createEmptySponsorGroups(): SponsorGroups {
  return sponsorRanks.reduce((groups, rank) => {
    groups[rank] = []
    return groups
  }, {} as SponsorGroups)
}

function normalizeSponsorGroups(groups?: Partial<Record<Rank, ISponsor[]>>): SponsorGroups {
  const normalized = createEmptySponsorGroups()

  for (const rank of sponsorRanks) {
    normalized[rank] = groups?.[rank] ?? []
  }

  return normalized
}

function fallbackSponsorGroups(): SponsorGroups {
  return normalizeSponsorGroups(fallbackSponsors)
}

export function useCMS<T>(options: { modelUid: string }) {
  const runtimeConfig = useRuntimeConfig()
  const hasCredentials = Boolean(runtimeConfig.newtSpaceUid && runtimeConfig.newtCdnToken)
  const client = hasCredentials
    ? createClient({
        spaceUid: runtimeConfig.newtSpaceUid,
        token: runtimeConfig.newtCdnToken,
        apiType: 'cdn',
      })
    : null
  const appUid = 'vuefes-2022'

  const fetchContent = async (query?: Query) => {
    if (!client) {
      return []
    }

    const contents = await client.getContents<T>({ appUid, ...options, query })

    return contents.items
  }

  return {
    fetchContent,
  }
}

export function useSponsorsCMS() {
  const options = { modelUid: 'sponsor' }
  const { fetchContent: getContents } = useCMS<ISponsor>(options)

  const fetchContent = async () => {
    try {
      const sponsors = await getContents()

      if (sponsors.length === 0) {
        return fallbackSponsorGroups()
      }

      return normalizeSponsorGroups(
        sponsors
          .sort((first, second) => {
            return first.order > second.order ? 1 : -1
          })
          .reduce(groupBy('rank'), {} as Partial<Record<Rank, ISponsor[]>>),
      )
    } catch {
      return fallbackSponsorGroups()
    }
  }

  const fetchContentByName = async (name: string) => {
    try {
      const sponsor = await getContents({ name_en: name })

      return sponsor[0] ?? findSponsorByName(name)
    } catch {
      return findSponsorByName(name)
    }
  }

  return {
    fetchContent,
    fetchContentByName,
  }
}

function groupBy<T extends Record<string, any>, P extends keyof T & string>(groupProperty: P) {
  return (acc: Record<string, T[]>, current: T) => {
    const key = current[groupProperty]
    if (!acc[key]) {
      acc[key] = [current]
    } else {
      acc[key].push(current)
    }
    return acc
  }
}

function findSponsorByName(name: string): ISponsor | undefined {
  for (const rank of sponsorRanks) {
    const sponsor = fallbackSponsors[rank]?.find((entry) => entry.name_en === name)

    if (sponsor) {
      return sponsor
    }
  }
}
