const express = require('express');
const app = express();
app.use(express.json());

const ordenes = [
  { id: 1, usuario_id: 1, producto_id: 2, total: 89000, estado: 'pagado' },
  { id: 2, usuario_id: 2, producto_id: 1, total: 25000, estado: 'pendiente' }
];

app.get('/pagos', (req, res) => {
  res.json({ ok: true, datos: ordenes });
});

app.post('/pagos', (req, res) => {
  const nueva = { id: ordenes.length + 1, estado: 'pendiente', ...req.body };
  ordenes.push(nueva);
  res.status(201).json({ ok: true, datos: nueva });
});

app.get('/health', (req, res) => {
  res.json({ servicio: 'pagos', estado: 'activo' });
});

app.listen(3003, () => console.log('Servicio pagos corriendo en puerto 3003'));
