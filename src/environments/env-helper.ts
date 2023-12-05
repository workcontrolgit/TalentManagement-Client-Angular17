export function baseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function getSubEnvironment() {
  return baseUrl().includes('localhost') ? 'localhost' : 'server';
}

export function stripTrailingSlash(url: string) {
  return baseUrl().endsWith('/') ? baseUrl().slice(0, -1) : baseUrl();
}
