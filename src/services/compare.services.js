import Axios from 'axios'
import ALERT_RESPONSES from '../utils/alert-responses'
import { API } from '../utils/api-constants'

export const compareSubmissionsResult = async (actionFunction, history) => {
    try {
        const response = await Axios.post(API.COMPARE_API)
        actionFunction(response)
        if (response) {
            history.push('/submissions-result')
            ALERT_RESPONSES.successResponses.compare()
        }
    } catch (error) {
        ALERT_RESPONSES.errorResponses.compare()

    }
}

export const getSpecificComparisonDetails  = async (actionFunction, id) => {
    try {
        const response = await Axios.get(`${API.GET_COMPARE_API}/${id}`)
        actionFunction(response)
    } catch (error) {
        console.error(error)
    }
}

export const reRunSpecificComparison  = async (actionFunction, id, history) => {
    try {
        const response = await Axios.put(`${API.RE_RUN_COMPARE_API}/${id}`)
        actionFunction(response)
        if (response) {
            history.push('/submissions-result')
            ALERT_RESPONSES.successResponses.compare()

        }
    } catch (error) {
        ALERT_RESPONSES.errorResponses.compare()
    }
}