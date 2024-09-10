import { Router, type Request, type Response } from 'express';
import QRCode from 'qrcode';
import { Google } from '../services/Google';

const qrGeneratorRouter = Router();

qrGeneratorRouter.get('/:email', async (req: Request, res: Response) => {
  const { email } = req.params;

  const user = await getUserDetails(email);

  if (!user) return res.status(404).send('Usuario no encontrado');

  const userDetails = {
    nombres: user.get('Nombres'),
    apellidos: user.get('Apellidos'),
    codigoRegistro: user.get('Código de registro'),
    verificacionQpaypro: user.get('Verificación Qpaypro'),
  };
  const userDetailsString = JSON.stringify(userDetails);

  try {
    const qrCode = await QRCode.toDataURL(userDetailsString);
    res.json({ qrCode });
  } catch (error) {
    res.status(500).send('Error al generar el QR');
  }
});

const getUserDetails = async (email: string) => {
  const sheet = await Google.getSheet();
  const rows = await sheet.getRows();
  const user = rows.find(
    row => row.get('Correo electrónico')?.toLowerCase() === email.toLowerCase()
  );

  return user;
};

export default qrGeneratorRouter;
