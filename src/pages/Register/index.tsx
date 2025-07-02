import "./Register.scss";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    storeName: "",
    email: "",
    repeatEmail: "",
    password: "",
    repeatPassword: "",
    phone: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("Enviando registro:", form);
    navigate("/admin");
  };

  return (
    <Box className="register-page">
      <Box className="register-container">
        <Box className="left-panel">
          <Typography variant="h4">¡Sumate a nuestra red!</Typography>
          <Typography variant="body1" className="subtext">
            Registrate para crear tu propia tienda digital y empezar a vender.
          </Typography>
          <span className="emoji">🛍️</span>
        </Box>

        <Box className="right-panel">
          <Typography variant="h5" className="title">
            Crear Cuenta
          </Typography>

          <TextField
            label="Nombre completo"
            name="name"
            fullWidth
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Nombre de la tienda"
            name="storeName"
            fullWidth
            value={form.storeName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Correo electrónico"
            name="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Repetir correo electrónico"
            name="repeatEmail"
            fullWidth
            value={form.repeatEmail}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            fullWidth
            value={form.password}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Confirmar contraseña"
            name="repeatPassword"
            type="password"
            fullWidth
            value={form.repeatPassword}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Teléfono (opcional)"
            name="phone"
            fullWidth
            value={form.phone}
            onChange={handleChange}
            margin="normal"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={form.terms}
                onChange={handleChange}
                name="terms"
              />
            }
            label="Acepto los términos y condiciones"
            className="checkbox"
          />

          <Typography variant="caption" className="required-note">
            * Todos los campos son obligatorios.
          </Typography>

          <Button
            variant="contained"
            fullWidth
            className="submit-btn"
            onClick={handleSubmit}
          >
            CREAR CUENTA
          </Button>

          <Typography
            variant="body2"
            className="login-link"
            onClick={() => navigate("/login")}
          >
            ¿Ya tenés cuenta? <span>Iniciar sesión</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
