import { Typography } from "@mui/material";

const ListHeader = ({ children, varitent }) => {
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
