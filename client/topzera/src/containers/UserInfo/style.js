import styled from 'styled-components'
import { Typography } from '../../components'

export const MainContainer = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;

    @media(min-width: 900px) {
        margin: auto;
    }
`

export const InfoStyled = styled(Typography)`
    font-style: italic;
    font-size: small;
    color: gray;
`

export const ContentContainerStyled = styled.div`
    padding: 50px 0;
    display: flex;
    align-items: center;
`