import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";

interface ItemCategoryTileProps {
    title: string;
    color: string;
    textColor: string;
    onClick: () => void;
}

function ItemCategoryTile(props: ItemCategoryTileProps) {
    return (
        <Card className="item-category-tile" style={{ "background": props.color, "color": props.textColor }}>
            <CardActionArea onClick={props.onClick}>
                <div>
                    {props.title}
                </div>
            </CardActionArea>
        </Card>
    )
}

export default ItemCategoryTile;