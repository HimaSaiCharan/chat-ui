import { Box, Paper, Tabs, Tab, Typography, Link } from "@mui/material";
import { useState, type SyntheticEvent } from "react";
import SignForm from "./SignForm";
import toast from "react-hot-toast";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) =>
    setActiveTab(newValue);

  const handleSignIn = async (data: { username: string; password: string }) => {
    const response = await fetch("/signin", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { isExist, url, message } = await response.json();

    if (!isExist) return toast.error(message);

    toast.success(message);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    globalThis.location.href = url;
  };

  const handleSignUp = async (data: { username: string; password: string }) => {
    const response = await fetch("/signup", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { isAccountCreated, message, url } = await response.json();

    if (!isAccountCreated) return toast.error(message);

    toast.success(message);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    globalThis.location.href = url;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#b4ddff",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: 400,
          bgcolor: "white",
          borderRadius: "14px",
          p: 3,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{
            mb: 2,
            "& .MuiTab-root": {
              color: "black",
            },
            "& .Mui-selected": {
              color: "#1976d2",
              fontWeight: "bold",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#8ec9f9",
            },
          }}
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>

        {activeTab === 0 ? (
          <Box sx={{ py: 2 }}>
            <SignForm
              onSubmit={handleSignIn}
              key={"signin"}
              buttonText="Sign In"
              postFormContent={
                <Typography variant="body2" align="center">
                  Don't have an account?{" "}
                  <Link
                    component="button"
                    type="button"
                    onClick={() => setActiveTab(1)}
                  >
                    Sign Up
                  </Link>
                </Typography>
              }
            />
          </Box>
        ) : (
          <Box sx={{ py: 2 }}>
            <SignForm
              onSubmit={handleSignUp}
              key={"signup"}
              buttonText="Sign Up"
              postFormContent={
                <Typography variant="body2" align="center">
                  Already have an account?{" "}
                  <Link
                    component="button"
                    type="button"
                    onClick={() => setActiveTab(0)}
                  >
                    Sign In
                  </Link>
                </Typography>
              }
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default AuthPage;
