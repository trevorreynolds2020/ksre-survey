import React from 'react'
import Container from '@material-ui/core/Container';

export const DirectSummary = () => {
    return(
        <Container maxWidth = "xs">
            <h1>Summary: </h1>
            <h2>Date: </h2>
            <h2>Name: </h2>
            <h2>County: </h2>
            <h2>Grand Challenges:</h2>
            <h2>Gender: </h2>
            <h2>Race: </h2>
            <h2>Ethnicity: </h2>
            <h2>Comments: </h2>
        </Container>
    )
}

export default DirectSummary;