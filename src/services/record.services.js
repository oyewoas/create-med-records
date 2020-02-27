import Axios from 'axios'
import ALERT_RESPONSES from '../utils/alert-responses'
import { API } from '../utils/api-constants'

export const createMedicalRecord = async (actionFunction) => {
    try {
        const response = await Axios.post(API.CREATE_MEDICAL_RECORD)
        actionFunction(response)
        ALERT_RESPONSES.successResponses.create_record()
    } catch (error) {
        ALERT_RESPONSES.errorResponses.create_record()
        
    }
}
