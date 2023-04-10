const initialState = { token: "", clips: [] }

export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case "auth/connect":
            return { ...state, token: action.payload.token };
        case "auth/disconnect":
            return { ...state, token: "" };
        case "local/add":
            return { ...state, clips: [...state.clips, { content: action.payload.content }] };
        default:
            return state;
    }
}