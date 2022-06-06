import React, {memo} from "react";
import { Badge } from '../../../../components'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { BadgeContainerStyled } from "./style";

function LikeBadge({ totalLikes }) {

    const ShowBadge = () => {
        if (totalLikes) return (
            <BadgeContainerStyled>
                <Badge badgeContent={totalLikes} color="primary">
                    <FavoriteBorderSharpIcon color="action" />
                </Badge>
            </BadgeContainerStyled>
        )
    }

    return (
        <ShowBadge />
    )
}

export default memo(LikeBadge)