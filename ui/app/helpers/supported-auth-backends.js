import { helper as buildHelper } from '@ember/component/helper';

const SUPPORTED_AUTH_BACKENDS = [
  {
    type: 'token',
    typeDisplay: 'Token',
    description: 'Token authentication.',
    tokenPath: 'id',
    displayNamePath: 'display_name',
    formAttributes: ['token'],
  },
  {
    type: 'userpass',
    typeDisplay: 'Username',
    description: 'A simple username and password backend.',
    tokenPath: 'client_token',
    displayNamePath: 'metadata.username',
    formAttributes: ['username', 'password'],
  },
  {
    type: 'ldap',
    typeDisplay: 'LDAP',
    description: 'LDAP authentication.',
    tokenPath: 'client_token',
    displayNamePath: 'metadata.username',
    formAttributes: ['username', 'password'],
  },
  {
    type: 'okta',
    typeDisplay: 'Okta',
    description: 'Authenticate with your Okta username and password.',
    tokenPath: 'client_token',
    displayNamePath: 'metadata.username',
    formAttributes: ['username', 'password'],
  },
  {
    type: 'jwt',
    typeDisplay: 'JWT/OIDC',
    description: 'Authenticate using JWT or OIDC provider.',
    tokenPath: 'client_token',
    displayNamePath: 'display_name',
    formAttributes: ['role', 'jwt'],
  },
  {
    type: 'oidc',
    typeDisplay: 'OIDC',
    description: 'Authenticate using JWT or OIDC provider.',
    tokenPath: 'client_token',
    displayNamePath: 'display_name',
    formAttributes: ['role', 'jwt'],
  },
  {
    type: 'github',
    typeDisplay: 'GitHub',
    description: 'GitHub authentication.',
    tokenPath: 'client_token',
    displayNamePath: ['metadata.org', 'metadata.username'],
    formAttributes: ['token'],
  },
];

export function supportedAuthBackends() {
  return SUPPORTED_AUTH_BACKENDS;
}

export default buildHelper(supportedAuthBackends);
