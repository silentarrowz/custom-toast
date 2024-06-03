import { createContext, useReducer } from "react";
import { toastReducer } from "../redux/reducers/toastReducer";
import ToastContainer  from '../components/ToastContainer/ToastContainer';

export const ToastContext = createContext();

const initialState = {
    toasts:[],
    position:'top-right'
};

export const ToastContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(toastReducer, initialState);   
    console.log('state position : ', state.position)
    const addToast = (type, message)=>{
        const id = Math.floor(Math.random() *1000000);
        console.log('type : ', type)
        dispatch({
            type: "ADD_TOAST",
            payload: {
                id,
                message,
                type
            }
        });
    }
    const setPosition = (position)=>{
        dispatch({
            type:'SET_POSITION',
            payload:position
        })
    }

    const remove = (id) => {
        dispatch({
            type:"DELETE_TOAST",
            payload:id
        })
    }

    const success = (message) => {
        addToast("success", message);
    }
    const warning = (message) => {
        addToast("warning", message);
    }
    const info = (message) => {
        addToast("info", message);
    }
    const error = (message) => {
        addToast("error", message);
    }

    const value = {success, warning, info, error, remove, setPosition};

    return (
        <ToastContext.Provider value={value}>
            <ToastContainer toasts={state.toasts} position={state.position} />
            {children}
        </ToastContext.Provider>
    )
}