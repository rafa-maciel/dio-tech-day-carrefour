import styled from 'styled-components'
import { Card, Typography, Button, CardContent } from '../../components'
import LikeBadge from './components/LikeBadge'
import ProductInfo from './components/ProductInfo'
import ProductButtons from './components/ProductButtons'

export const ProductCardStyled = styled(Card)`
    margin-bottom: 5px;
    height: 500px;

    @media (min-width: 375px) {
        height: 600px;
    }

    @media (min-width: 768px) {
        height: 550px;
    }
`

export const ProductListStyled = styled.ul`
    color: blue;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 375px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        max-width: 400px;
        margin: 0 auto;

        li {
            flex-grow: 1;
            max-width: 100%;

        }
    }

    @media (min-width: 768px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        max-width: 800px;
        margin: 0 auto;

        li {
            flex-grow: 1;
            max-width: 48%;
        }
    }

    @media (min-width: 1090px) {
        max-width: 1100px;

        li {
            flex-grow: 1;
            max-width: 30%;
        }
    }

    
`

export const CardContentStyled = styled(CardContent)`
    height: calc(100% - 110px);
`

export const LikeBadgeStyled = styled(LikeBadge)`
    display: flex;
`

export const ProductButtonsStyled = styled(ProductButtons)`
    display: flex;
    justify-content: space-between;
`

export const ProductInfoStyled = styled(ProductInfo)`
    .title {
        font-size: 1.4rem;
    }

    .price {
        text-align: center;
    }
`

export const PanelSubtitle = styled(Typography)`
    text-align: center;
`

export const ButtonChangeInfo = styled(Button)`
    margin-top: 20px !important;
`