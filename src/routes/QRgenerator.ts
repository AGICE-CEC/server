import { Router, type Request, type Response } from 'express';
import QRCode from 'qrcode';

const qrGeneratorRouter = Router();

const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

qrGeneratorRouter.get('/cec-qr', async (req: Request, res: Response) => {
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

export default qrGeneratorRouter;
