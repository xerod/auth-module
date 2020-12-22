import type { ProviderOptions, ProviderPartialOptions } from '../types'
import type { Oauth2SchemeOptions } from '../schemes'
import { assignDefaults, addAuthorize } from '../utils/provider'

export interface MokaProviderOptions
  extends ProviderOptions,
    Oauth2SchemeOptions {}

export function moka(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  nuxt: any,
  strategy: ProviderPartialOptions<MokaProviderOptions>
): void {
  const DEFAULTS: typeof strategy = {
    scheme: 'oauth2',
    endpoints: {
      authorization: 'https://api.mokapos.com/oauth/authorize',
      token: 'https://api.mokapos.com/oauth/token',
      userInfo: 'https://api.mokapos.com/v1/profile/self',
      logout: false
    },
    responseType: 'code',
    grantType: 'authorization_code',
    accessType: 'offline',
    redirectUri: 'http://localhost:3000/auth/callback',
    logoutRedirectUri: '/',
    scope: ['report', 'customer', 'transaction'],
    autoLogout: true
  }

  assignDefaults(strategy, DEFAULTS)

  addAuthorize(nuxt, strategy)
}
