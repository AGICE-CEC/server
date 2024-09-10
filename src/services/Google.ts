import { GoogleSpreadsheet } from 'google-spreadsheet';
import { google } from 'googleapis';

// Variables de entorno
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const sheeCredentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SHEETS_BASE64 ?? '', 'base64').toString(
    'ascii'
  )
);
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

if (!sheeCredentials || !SPREADSHEET_ID) {
  throw new Error('Faltan variables de entorno necesarias.');
}

// se obtiene la autorización para acceder a la hoja de cálculo
const sheetsAuth = new google.auth.GoogleAuth({
  credentials: sheeCredentials,
  scopes: SCOPES,
});

const getSheet = async () => {
  const cec_sheets = new GoogleSpreadsheet(String(SPREADSHEET_ID), sheetsAuth);

  await cec_sheets.loadInfo(); // carga la información de la hoja de cálculo
  const sheet = cec_sheets.sheetsByIndex[0]; // obtiene la primera hoja del documento

  await cec_sheets.loadCells('A1:U500'); // carga las celdas de la hoja de cálculo

  if (!sheet) {
    throw new Error('No se pudo obtener la primera hoja del documento');
  }

  return sheet;
};

export const Google = {
  getSheet,
};
