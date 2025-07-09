import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

const SignForm = ({
  onSubmit,
  buttonText,
  postFormContent,
}: {
  postFormContent?: ReactNode;
  buttonText: string;
  onSubmit: (data: { username: string; password: string }) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const usernameWithNoSpaces = e.target.value.replace(/\s/g, "");
    setUsername(usernameWithNoSpaces);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    onSubmit({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          autoComplete="username"
          name="username"
          value={username}
          label="Username"
          variant="outlined"
          fullWidth
          size="small"
          required
          onChange={handleUsernameChange}
        />
        <TextField
          onChange={handlePasswordChange}
          value={password}
          required
          label="Password"
          variant="outlined"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          disabled={!username.trim()}
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#1976d2" }}
          disableRipple
        >
          {buttonText}
        </Button>
        {postFormContent}
      </Box>
    </form>
  );
};

export default SignForm;
