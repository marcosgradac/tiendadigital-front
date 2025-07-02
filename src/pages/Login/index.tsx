import "./Login.scss";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Login:", form);
    navigate("/admin");
  };

  return (
    <Box className="auth-wrapper">
      <div className="auth-left">
        <div className="left-content">
          <Typography variant="h4">Bienvenido de nuevo</Typography>
          <Typography variant="body1">
            Iniciá sesión para administrar tu tienda.
          </Typography>
          <div className="icon-launch">🚀</div>
        </div>
      </div>

      <div className="auth-right">
        <div className="form-box">
          <Typography variant="h5" className="form-title">
            Iniciar Sesión
          </Typography>

          <TextField
  label="Correo electrónico"
  name="email"
  value={form.email}
  onChange={handleChange}
  fullWidth
  margin="normal"
  variant="outlined"
/>

<TextField
  label="Contraseña"
  type="password"
  name="password"
  value={form.password}
  onChange={handleChange}
  fullWidth
  margin="normal"
  variant="outlined"
/>

          <FormControlLabel
            control={<Checkbox defaultChecked sx={{ color: "#ccc" }} />}
            label="Recordarme"
            sx={{ color: "#ccc" }}
          />

          <Button
            variant="contained"
            fullWidth
            className="auth-button"
            onClick={handleSubmit}
          >
            INGRESAR
          </Button>

          <Typography variant="body2" className="auth-link">
            ¿No tenés cuenta?{" "}
            <span onClick={() => navigate("/register")}>Registrate</span>
          </Typography>
        </div>
      </div>
    </Box>
  );
}
