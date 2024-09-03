import express, { type Request, type Response } from 'express';
import QRCode from 'qrcode';

const app = express();
const port = 3000;


const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

app.get('/cec-qr', async (req: Request, res: Response) => {
  const url = req.query.url as string;

  if (!url || !urlRegex.test(url)) {
    return res.status(400).send('URL es inválida o requerida');
  }

  try {
    const qrCode = await QRCode.toDataURL(url);
    res.json({ qrCode });
  } catch (error) {
    res.status(500).send('Error al generar el QR');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
