import { ReactNode } from "react";
import { Paper } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";

interface GlassCardProps {
    children: ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
    const theme = useTheme<Theme>();

    return(
        <Paper 
            elevation={15}
            sx={{
                backgroundColor: theme.palette.glass.main,
                backdropFilter: 'blur(4px)',
                p:5,
                width: "fit-content",
                maxWidth: "100%",
                display: "inline-block",
            }}
        >
            {children}
        </Paper>
    )
}