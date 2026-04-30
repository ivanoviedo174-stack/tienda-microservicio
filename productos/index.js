const express = require('express');
const app = express();
app.use(express.json());

const productos = [
  { id: 1, nombre: 'Camiseta', precio: 25000, stock: 50 },
  { id: 2, nombre: 'Zapatos', precio: 89000, stock: 30 },
  { id: 3, nombre: 'Bolso', precio: 45000, stock: 20 }
];

app.get('/productos', (req, res) => {
  res.json({ ok: true, datos: productos });
});

app.post('/productos', (req, res) => {
  const nuevo = { id: productos.length + 1, ...req.body };
  productos.push(nuevo);
  res.status(201).json({ ok: true, datos: nuevo });
});

app.get('/health', (req, res) => {
  res.json({ servicio: 'productos', estado: 'activo' });
});

app.listen(3002, () => console.log('Servicio productos corriendo en puerto 3002'));
