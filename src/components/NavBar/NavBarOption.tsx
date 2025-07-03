import { IconButton, Tooltip } from "@mui/material";
import type { MouseEvent, ReactNode } from "react";

const NavBarOption = ({
  icon,
  onClick,
  title,
}: {
  icon: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
}) => {
  return (
    <Tooltip
      title={title}
      placement="left"
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "14px",
            padding: "6px 10px",
          },
        },
      }}
    >
      <IconButton onClick={onClick} disableRipple>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default NavBarOption;
