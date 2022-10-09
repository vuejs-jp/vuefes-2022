import { createClient } from 'newt-client-js'
import { Query } from 'newt-client-js/dist/types/types'
import { ISponsor } from '~/types/sponsors'

export function useCMS<T>(options: { modelUid: string }) {
  const runtimeConfig = useRuntimeConfig()
  const client = createClient({
    spaceUid: runtimeConfig.newtSpaceUid,
    token: runtimeConfig.newtCdnToken,
    apiType: 'cdn',
  })
  const appUid = 'vuefes-2022'

  const fetchContent = (query?: Query) =>
    client.getContents<T>({ appUid, ...options, query }).then((contents) => {
      return contents.items
    })

  return {
    fetchContent,
  }
}

export function useSponsorsCMS() {
  const runtimeConfig = useRuntimeConfig()
  const client = createClient({
    spaceUid: runtimeConfig.newtSpaceUid,
    token: runtimeConfig.newtCdnToken,
    apiType: 'cdn',
  })
  const appUid = 'vuefes-2022'

  const options = { modelUid: 'sponsor' }
  const { fetchContent: getContents } = useCMS<ISponsor>(options)
  const fetchContent = () =>
    getContents({ appUid, ...options }).then((sponsors) => {
      return sponsors
        .sort((first, second) => {
          return first.order > second.order ? 1 : -1
        })
        .reduce(groupBy('rank'), {})
    })

  const fetchContentByName = (name: string) =>
    getContents({ name_en: name }).then((sponsor) => {
      return sponsor[0]
    })

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
