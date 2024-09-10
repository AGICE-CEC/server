import { Google } from '../services/Google';

// Función para verificar las credenciales de un usuario
export async function checkCredentials(user: string): Promise<boolean> {
  const sheet = await Google.getSheet();
  // se llama la función verifyUser con el nombre de usuario y el objeto sheets
  const verified = await verifyPayment(user, sheet);
  return verified; // se retorna el resultado
}

// Verificar si existe el usuario
async function verifyPayment(username: string, sheets: any): Promise<boolean> {
  const rows = await sheets.getRows(); // Await the rows from the sheet

  for (const row of rows) {
    // Iterate over each row
    if (
      row.get('Correo electrónico')?.toLowerCase() === username.toLowerCase()
    ) {
      // Check if the username matches
      return row.get('Verificación Qpaypro') === 'OK'; // Return true if verification is OK
    }
  }

  return false; // Return false if no match is found
}
