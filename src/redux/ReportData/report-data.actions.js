import UPDATEREPORTDATA from './report-data.types'

export const updateReportData = (reportData) => {
    return {
        type: UPDATEREPORTDATA,
        payload: reportData
    }
}