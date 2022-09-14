export interface ISession {
  id: string
  title: string
  description: string
  area: string
  type: string
  started_at: string
  ended_at: string
  time: string
  speaker: string
  tags?: string
  slide_url?: string
  fortee_url?: string
  youtube_url?: string
}
export interface ISpeaker {
  id: string
  bio: string
  session: ISession
  company: string
  facebook?: string
  connpass?: string
  related_url?: string
  profile: ISpeakerProfile
}
export interface ISpeakerProfile {
  image: string
  title: string
  name: string
  twitter?: string
  github?: string
  description: string
}
