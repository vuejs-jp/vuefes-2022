import { ISpeakerProfile } from '~/types/interface'

export interface IEvent {
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
