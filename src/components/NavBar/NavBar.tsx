import { PersonSearch } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import NavBarOption from "./NavBarOption";
import SearchPeopleModal from "./SeachPeopleModal";

const NavBar = ({ width }: { width: string }) => {
  const [isOpen, openModal] = useState(false);

  return (
    <>
      <Stack
        sx={{
          width,
          backgroundColor: "white",
          borderRadius: "14px",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <NavBarOption
          title="Search People"
          icon={<PersonSearch sx={{ fontSize: "40px", color: "black" }} />}
          onClick={() => openModal(true)}
        />
      </Stack>

      <SearchPeopleModal isOpen={isOpen} onClose={() => openModal(false)} />
    </>
  );
};

export default NavBar;
