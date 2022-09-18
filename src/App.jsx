import { useState } from "react";
import "./App.css";
import useFormController from "./hooks/useFormController";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

function App() {
  const { formik } = useFormController();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        style={{ width: "30%", maxWidth: 400, minWidth: 320, padding: 20 }}
        component="form"
        className="App"
        onSubmit={formik.handleSubmit}
      >
        {/* ----- Name ----- */}
        <TextField
          label="Name"
          variant="outlined"
          style={{ width: "100%" }}
          type={"text"}
          name="name"
          id="signup-last-name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        {/* ----- Email ----- */}
        <TextField
          label="Email Address"
          variant="outlined"
          style={{ width: "100%" }}
          type={"email"}
          name="email"
          id="signup-email"
          value={formik.values.email}
          autoComplete="new-password"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {/* ----- Password ----- */}
        <FormControl style={{ width: "100%" }}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            name="password"
            id="signup-password"
            value={formik.values.password}
            autoComplete="new-password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {formik.touched.password && (
            <FormHelperText error>{formik.errors.password}</FormHelperText>
          )}
        </FormControl>

        {/* ----- Signup Action Button ----- */}
        <Button variant="contained" type="submit" id="signup-submit">
          Signup
        </Button>
      </Box>
    </>
  );
}

export default App;
