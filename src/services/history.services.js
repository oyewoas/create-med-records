import Axios from 'axios'
import { API } from '../utils/api-constants'

export const getHistory = async (actionFunction) => {
    try {
        const response = await Axios.get(API.HISTORY_API)
        actionFunction(response)
    } catch (error) {
        console.error(error)
    }
}


