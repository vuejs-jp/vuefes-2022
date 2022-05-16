import { useRuntimeConfig } from '#app'
import { createClient } from 'newt-client-js'

const createNewtClient = () => {
  const $config = useRuntimeConfig()
  return createClient({
    spaceUid: $config.spaceUid,
    token: $config.accessToken,
    apiType: $config.apiType
  })
}

export default createNewtClient
