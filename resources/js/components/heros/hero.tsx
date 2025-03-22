import React, { ReactNode } from "react";
import { Box, Stack } from "@mui/material";

interface HeroProps {
    children: ReactNode
}

export function Hero({children}: HeroProps) {
    return (
        <Stack sx={{
            p:5, 
            backgroundImage:'url(https://i.imgur.com/XycLwZv.jpeg)', 
            backgroundSize:'cover', 
            backgroundPosition: 'right center', 
            height:'100dvh', 
            display:'flex', 
            flexDirection:'column', 
            }}>
            <Box sx={{
                display:'flex', 
                flexDirection:'column', 
                height:'100%'
                }}>
                {children}
            </Box>
        </Stack>
    )
} 