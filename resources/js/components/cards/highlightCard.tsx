import { ReactNode } from "react";
import { Paper } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";

interface HighlightProps {
    children: ReactNode;
}

export function HiglightText({ children }: HighlightProps) {
    const theme = useTheme<Theme>();

    return (
        <Paper elevation={10} sx={{
            backgroundColor:theme.palette.secondary.main,
            width:'fit-content',
            p:2,
            borderRadius:'10px',
            display:'flex',
            gap:'10px',
            alignItems:'center',
            color:'#fff',
            fontWeight:'bolder'
        }}>
            {children}
        </Paper>
    )
}