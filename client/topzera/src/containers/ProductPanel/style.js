import styled from 'styled-components'
import { Card, Typography, Button } from '../../components'
import LikeBadge from './components/LikeBadge'
import ProductInfo from './components/ProductInfo'
import ProductButtons from './components/ProductButtons'

export const ProductCardStyled = styled(Card)`
    margin-bottom: 5px;
`

export const ProductListStyled = styled.ul`
    color: blue;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            max-width: 30%;
            height: 800px;
        }
    }
`

export const LikeBadgeStyled = styled(LikeBadge)`
    display: flex;
    justify-content: flex-end;
    margin: 30px;
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