import "./ProductCard.scss";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

type Props = {
  producto: {
    nombre: string;
    precio: number;
    imagen: string;
  };
};

export default function ProductCard({ producto }: Props) {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        image={producto.imagen}
        alt={producto.nombre}
        className="product-img"
      />
      <CardContent className="product-content">
        <Typography variant="h6">{producto.nombre}</Typography>
        <Typography variant="body1">${producto.precio.toLocaleString()}</Typography>
        <Button variant="contained" className="buy-btn">
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}
