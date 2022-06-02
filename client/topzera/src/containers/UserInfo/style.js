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

export const HeaderContainerStyled = styled.div`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const TitleStyled = styled(Typography)`
    text-transform: uppercase;
    text-align: center;
`

export const SubtitleStyled = styled(Typography)`
    display: block;
    font-size: 1.5rem;
    text-align: center;
    color: blue;
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