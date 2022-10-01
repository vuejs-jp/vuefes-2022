export interface ISession {
  title: string
  description: string
  type: string
  time: number
  tags?: string
  slide_url?: string
  fortee_url?: string
  youtube_url?: string
}
export interface ISpeaker {
  id: string
  type: 'evan' | 'foreign' | 'domestic'
  session: ISession
  profile: ISpeakerProfile
  facebook?: string
  connpass?: string
  related_url?: string
  linkedin?: string
  web?: string
}
export interface ISpeakerProfile {
  image: string
  title: string
  name: string
  twitter?: string
  github?: string
  description: string
}
