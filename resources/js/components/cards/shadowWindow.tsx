import React, { ReactNode } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

interface ShadowWindowProps {
    children: ReactNode
};

export function ShadowWindow({children}: ShadowWindowProps) {
    const theme = useTheme();

    return (
        <Box sx={{flex:5, display:'flex', justifyContent:"center", alignItems:'center'}}>
            <Box sx={{
                p:3, 
                backgroundColor: theme.palette.glass.main,
                backdropFilter: 'blur(8px)', 
                boxShadow:theme.shadows[10], 
                borderRadius:'10px', 
                display:'flex', 
                flexDirection:'column', 
                gap:'20px'
                }}>
                    {children}
            </Box>
        </Box>
    )
} 