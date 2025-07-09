import { Typography } from "@mui/material";
import type { ReactNode } from "react";

const ListHeader = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "h3" | "h4" | "h5";
}) => {
  return (
    <Typography
      variant={variant}
      component="div"
      sx={{
        fontWeight: "800",
        py: "12px",
        textDecoration: "underline",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

export default ListHeader;
