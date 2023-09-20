import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { ItemCategory } from 'types/dto';

interface ItemProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    category: string;
    itemCategories: ItemCategory[];
}
export function Item(props: ItemProps) {
    return (
        <Card >
            <CardActionArea>
                <CardContent>
                    <Tooltip title={props.title}>
                        <div className="item-title">
                            {props.title}
                        </div>
                    </Tooltip>
                    <CardMedia
                        component="img"
                        image={props.imageUrl}
                        alt={props.title}
                    />

                    <div className="item-details" style={{
                        "background": props.itemCategories.find(c => c.name === props.category)?.tileColor
                            || props.itemCategories.find(c => c.name === "DEFAULT").tileColor
                    }}>
                        <br />
                        <Typography className="item-price"  >
                            Rs {props.price.toFixed(2)}
                        </Typography>
                        <Tooltip title={props.description}>
                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </Tooltip>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}