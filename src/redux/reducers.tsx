const initialState = { token: "" }

export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case "auth/connect":
            return { ...state, token: action.payload.token, username: action.payload.username };
        case "auth/disconnect":
            return { ...state, token: "" };
        default:
            return state;
    }
}