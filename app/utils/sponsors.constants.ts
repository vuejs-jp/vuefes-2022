import Image01 from '!url-loader!~/assets/img/animation/image05.png'
import { ISponsor, Rank } from '../types/sponsors'

export const sponsorSupportLevelTitle = (rank: Rank) => {
  switch (rank) {
  case 'platinum':
    return 'Platinum'
  case 'gold':
    return 'Gold'
  case 'silver':
    return 'Silver'
  case 'bronze':
    return 'Bronze'
  case 'media':
    return 'Media'
  case 'specialMedia':
    return 'Special Media'
  case 'streaming':
    return 'Streaming'
  case 'dinner':
    return 'Dinner'
  default:
    const _missing: never = rank
    return ''
  }
}
