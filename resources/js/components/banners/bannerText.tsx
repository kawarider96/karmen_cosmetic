import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HighlightText } from "../cards/highlightCard";

export function BannerText() {
    return (
        <Box sx={{flex:1, display:'flex', flexDirection:'column', gap:'10px'}}>
            <Typography variant='h5' sx={{color:'#fff', fontFamily: 'Outfit, sans-serif', fontWeight:'bolder'}}>Kustra Kármen kozmetikus</Typography>
            <Typography variant='body2' sx={{color:'#fff', fontFamily: 'Outfit, sans-serif', fontWeight:'bolder'}}>Colonia-Passage Üzletház, Citrom utca 2-6. , Pécs, Hungary</Typography>
            <Box sx={{display:'flex', gap:'10px'}}>
                <HighlightText>
                    <PhoneIphoneIcon />
                    <Typography variant='body2'>+36 30 520 1000</Typography>
                </HighlightText>
                <Button variant='contained'>
                    <a style={{display:'flex', alignItems:'center'}} href='https://www.facebook.com/profile.php?id=61573648136257' target='_blank'><FacebookIcon sx={{color:'#fff', fontSize:'50px '}}/></a>
                </Button>
            </Box>
        </Box>
    )
}