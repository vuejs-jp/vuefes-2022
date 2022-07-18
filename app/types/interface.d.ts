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
  name: string
  bio: string
  session: ISession
  title: string
  company: string
  twitter?: string
  facebook?: string
  connpass?: string
  github?: string
  related_url?: string
  image: string
}
