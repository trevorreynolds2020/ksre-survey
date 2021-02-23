import UPDATECSVDATA from './csvData.types'

export const updateCSVData = (csvData) => {
    return {
        type: UPDATECSVDATA,
        payload: csvData
    }
}