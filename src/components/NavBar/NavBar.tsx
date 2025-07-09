import { LogoutOutlined, PersonSearch } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import NavBarOption from "./NavBarOption";
import SearchPeopleModal from "./SeachPeopleModal";
import toast from "react-hot-toast";

const NavBar = ({ width }: { width: string }) => {
  const [isOpen, openModal] = useState(false);

  const handleLogout = async () => {
    const response = await fetch("https://chat-app-ikl8.onrender.com/logout");
    const { success, message, redirectTo } = await response.json();

    if (!success) return toast.error(success);

    toast.success(message);
    window.location.href = redirectTo;
  };

  return (
    <>
      <Stack
        spacing={4}
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
        <NavBarOption
          title="Logout"
          icon={<LogoutOutlined sx={{ fontSize: "40px", color: "black" }} />}
          onClick={handleLogout}
        />
      </Stack>

      <SearchPeopleModal isOpen={isOpen} onClose={() => openModal(false)} />
    </>
  );
};

export default NavBar;
