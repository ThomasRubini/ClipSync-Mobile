const initialState = { token: "" }

export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case "auth/connect":
            return { ...state, token: action.payload.token };
        case "auth/disconnect":
            return { ...state, token: "" };
        default:
            return state;
    }
}