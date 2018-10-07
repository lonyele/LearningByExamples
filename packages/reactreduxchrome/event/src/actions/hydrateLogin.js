const HYDRATE_LOGIN = 'HYDRATE_LOGIN';

export function hydrateLogin(info) {
  return { type: HYDRATE_LOGIN, info };
}