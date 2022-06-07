import styled from 'styled-components'
import { Typography } from '../../../../components'

export const LoadingScreenStyled = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.2);
    top: 0;
    left: 0;
`

export const LoadingPanelStyled = styled.div`
    position: absolute;
    left: 0;
    top: calc(100vh - 20%);
    width: 100%;
`

export const LoadingLabel = styled(Typography)`
    width: 50%;
    display: block;
    margin: 15px auto !important;
    text-align: center;
`