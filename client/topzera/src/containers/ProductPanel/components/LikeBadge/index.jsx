import React, {memo} from "react";
import { Badge } from '../../../../components'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

function LikeBadge({ totalLikes }) {

    const ShowBadge = () => {
        if (totalLikes) return (
            <div>
                <Badge badgeContent={totalLikes} color="primary">
                    <FavoriteBorderSharpIcon color="action" />
                </Badge>
            </div>
        )
    }

    return (
        <ShowBadge />
    )
}

export default memo(LikeBadge)