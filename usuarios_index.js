const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [
  { id: 1, nombre: 'Ana García', email: 'ana@tienda.com' },
  { id: 2, nombre: 'Carlos López', email: 'carlos@tienda.com' }
];

app.get('/usuarios', (req, res) => {
  res.json({ ok: true, datos: usuarios });
});

app.post('/usuarios', (req, res) => {
  const nuevo = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevo);
  res.status(201).json({ ok: true, datos: nuevo });
});

app.get('/health', (req, res) => {
  res.json({ servicio: 'usuarios', estado: 'activo' });
});

app.listen(3001, () => console.log('Servicio usuarios corriendo en puerto 3001'));
