
export const toastReducer = (state, action) => {
    switch(action.type){
        case "ADD_TOAST":{
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            }
        };
        case "DELETE_TOAST":{
            const filteredToasts = state.toasts.filter(
                (toast)=> toast.id !== action.payload
            )
            return {
                ...state,
                toasts: filteredToasts
            }
        }
        case "SET_POSITION":{
            return {
                ...state,
                position:action.payload
            }
        }
        default:{
            throw new Error(`Unhandled action type : ${action.type}`)
        }
    }
}