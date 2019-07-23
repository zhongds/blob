import request from '../request'
import { CLIENT_ID, USER_NAME, PASSWORD, PROJECT_ID, DB_NAME } from '../config'

export function fetchToken(opts) {
  const url = `https://${PROJECT_ID}.xbase.cloud/v1/auth/signin`
  return request(url, {
    ...opts,
    method: 'POST',
    body: JSON.stringify({
      client_id: CLIENT_ID,
      username: USER_NAME,
      password: PASSWORD,
    })
  })
}

export function fetchTodolist(opts) {
  return request(`https://${PROJECT_ID}.xbase.cloud/v1/db/${DB_NAME}`, {
    method: 'GET',
    ...opts,
  })
}

