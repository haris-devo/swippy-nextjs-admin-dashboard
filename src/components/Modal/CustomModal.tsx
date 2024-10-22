// components/CustomModal.tsx
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  sx?: object; // Allows custom styling
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  children,
  sx,
}) => {
  const defaultStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: "1rem 2rem",
    ...sx,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box sx={defaultStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {title && (
            <Typography
              id="custom-modal-title"
              variant="h6"
              component="h2"
              className="text-black-2"
            >
              {title}
            </Typography>
          )}
          <IconButton onClick={onClose}>
            <IoCloseCircleOutline />
          </IconButton>
        </Box>
        <Box id="custom-modal-description">{children}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
