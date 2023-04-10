export function setUser(token: string) {
  return {
    type: 'auth/connect',
    payload: {token},
  };
}

export function clearUser() {
  return {
    type: 'auth/disconnect',
  };
}

export function addToLocal(content: string) {
  return {
    type: 'local/add',
    payload: {content},
  };
}
