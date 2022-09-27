import { ISpeakerProfile } from '~/types/interface'

export interface IEvent {
  id: string
  title: string
  logoList: ILogo[]
  description: string
  isShowSpeakerProfile: boolean
  speakerProfileList: ISpeakerProfile[]
}
interface ILogo {
  src: string
  alt: string
  link?: string
}
