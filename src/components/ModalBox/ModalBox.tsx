import { Box, Modal } from "@mui/material";
import type { ReactNode } from "react";

const ModalBox = ({
  children,
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "14px",
          boxShadow: 24,
          width: 600,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalBox;
