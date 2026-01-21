import React from "react";
import { styled } from "@mui/material/styles";

interface StyledButtonProps {
  children: React.ReactNode;
}

const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default StyledButton;
