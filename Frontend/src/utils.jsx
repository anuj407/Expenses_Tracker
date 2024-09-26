
import { toast } from 'react-toastify';
// import env from '../'
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}
export const APIUrl = 'http://localhost:8080';