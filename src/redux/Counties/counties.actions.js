import UPDATECOUNTIES from './counties.types'

export const updateCounties = (counties) => {
    return {
        type: UPDATECOUNTIES,
        payload: counties
    }
}