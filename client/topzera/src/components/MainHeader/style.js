import styled from 'styled-components'
import { Typography  } from '../../components'

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