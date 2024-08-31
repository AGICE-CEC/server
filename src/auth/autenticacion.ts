import * as fs from 'fs';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import * as readline from 'readline';
import * as dotenv from 'dotenv';
import { google } from 'googleapis';
import * as path from 'path'; // Para manejar las rutas correctamente

dotenv.config(); // Cargar variables de entorno desde el archivo .env



// Variables de entorno
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const sheeCredentials = JSON.parse(Buffer.from(process.env.GOOGLE_SHEETS_BASE64 ?? '', 'base64').toString('ascii'));
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

if (!sheeCredentials || !SPREADSHEET_ID) {
  throw new Error('Faltan variables de entorno necesarias.');
}


// Función para verificar las credenciales de un usuario
async function checkCredentials(user: string): Promise<boolean> {
  // se obtiene la autorización para acceder a la hoja de cálculo
  const sheetsAuth = new google.auth.GoogleAuth({
    credentials: sheeCredentials,
    scopes: SCOPES
  });
  
  
  const cec_sheets = new GoogleSpreadsheet(String(SPREADSHEET_ID), sheetsAuth)

  await cec_sheets.loadInfo(); // carga la información de la hoja de cálculo
  const sheet = cec_sheets.sheetsByIndex[0]; // obtiene la primera hoja del documento
  

  await cec_sheets.loadCells('A1:U'); // carga las celdas de la hoja de cálculo
  
  
    if (!sheet) {
        throw new Error('No se pudo obtener la primera hoja del documento');
    }

  // se llama la función verifyUser con el nombre de usuario y el objeto sheets
  const verified = await verifyPayment(user, (sheet));
  return verified; // se retorna el resultado
}

// Verificar si existe el usuario
async function verifyPayment(username: string, sheets: any): Promise<boolean> {
    const rows = await sheets.getRows(); // Await the rows from the sheet

    for (const row of rows) { // Iterate over each row
        if (row.get("Correo electrónico") === username) { // Check if the username matches
            return row.get("Verificación Qpaypro") === "OK"; // Return true if verification is OK
        }
    }

    return false; // Return false if no match is found
}


// Llamada a checkCredentials
//checkCredentials("dayannavargasmadrigal@gmail.com").then(console.log).catch(console.error);
