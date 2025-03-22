import React from "react";
import { Grid2, Box, CardMedia, Typography, CardContent, Card, CardActions, Button } from "@mui/material";

interface ProductCardProps {
    title: string,
    description: string,
    image: string,
    actionText: string,
}

export function ProductCard({title, description, image, actionText}: ProductCardProps) {
    return (
        <Grid2 size={{xs:12, lg:4}}>
            <Card sx={{ p: 2, display:['block', 'flex'], height:"500px" }}>
                <CardMedia component="img" sx={{height:['50%', '100%']}} image={image} />
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <CardContent sx={{height:['200px', '100%'], overflow:'auto', display:'flex', flexDirection:'column', gap:'50px'}}>
                        <Title title={title}/>
                        <Description description={description}/>
                    </CardContent>
                    <CardActions sx={{flex:1, display:'flex', alignItems:'flex-end'}}>
                        <Button variant='contained' fullWidth href='https://www.alissa.hu/' target='_blank'>{actionText}</Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid2>
    )
}

interface TitleProps {
    title: string
}

const Title = ({title}: TitleProps) => (
    <Typography variant="h5">{title}</Typography>
)

interface DescriptionProps {
    description: string
}

const Description = ({description}: DescriptionProps) => (
    <Typography variant="body2" sx={{textAlign:'justify'}}>
        {description}
    </Typography>
)