import Toast from '../Toast/Toast';
import container from './container.css';

const ToastContainer = ({toasts, position}) => {    

    const getPositionClass = (position) => {
        switch(position){
            case 'top-left':return 'top-0 left-0';
            case 'top-right': return 'top-0 right-0';
            case 'bottom-left': return 'bottom-0 left-0';
            case 'bottom-right': return 'bottom-0 right-0'
            default: return 'top-0 right-0';
        }
    } 
    return (
        <div className={`toast-container ${getPositionClass(position)}`}>
            {toasts.map((toast) => (
                <Toast key={toast.id} message={toast.message} type={toast.type} id={toast.id} />
            ))}
        </div>
    )
}

export default ToastContainer;