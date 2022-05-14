import { useRuntimeConfig } from '#app'

export default () => {
  const $config = useRuntimeConfig()
  return {
    BASE_URL: 'https://vuefes.jp/2022/',
    MICROCMS_BASIC_ENDPOINT: $config.microcmsApiEndpoint,
    MICROCMS_SPONSOR_ENDPOINT: `${$config.microcmsApiEndpoint}sponsors`,
    MICROCMS_SPEAKER_ENDPOINT: `${$config.microcmsApiEndpoint}speakers`,
    MICROCMS_SESSION_ENDPOINT: `${$config.microcmsApiEndpoint}sessions`,
  }
}
