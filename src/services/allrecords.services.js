import Axios from 'axios'
import { API } from '../utils/api-constants'

export const getRecords = async (actionFunction) => {
    try {
        const response = await Axios.get(API.GET_ALL_MEDICAL_RECORDS)
        actionFunction(response)
    } catch (error) {
        console.error(error)
    }
}


