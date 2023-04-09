export function setUser(token: string, username: string) {
    return {
        type: "auth/connect",
        payload: { token, username }
    };
}

export function clearUser() {
    return {
        type: "auth/disconnect"
    };
}