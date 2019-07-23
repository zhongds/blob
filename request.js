export default function request(url, opts) {
  return fetch(url, opts).then(res => res.json())
}