import { Typography } from "@mui/material";
import type { ReactNode } from "react";

const ListHeader = ({
  children,
  varitent,
}: {
  children: ReactNode;
  varitent: "h3" | "h4" | "h5";
}) => {
  return (
    <Typography
      variant={varitent}
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
