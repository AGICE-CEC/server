import * as fs from 'fs';
import * as readline from 'readline';
import * as dotenv from 'dotenv';
import { google } from 'googleapis'

// EL SHEETS OFICIAL ES: https://docs.google.com/spreadsheets/d/1_hKRue_cL4y2Uifrkl9gSdrBSdrzYxveB9meDy6Zfsw/edit?gid=1165359470#gid=1165359470

dotenv.config();

// Variables de entorno
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const TOKEN_PATH = process.env.TOKEN_PATH;
const CRED_PATH = process.env.CRED_PATH;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

if (!TOKEN_PATH || !CRED_PATH || !SPREADSHEET_ID) {
  throw new Error('Faltan variables de entorno necesarias.');
}


// Funcion para verificar las credenciales de un usuario
async function checkCredentials(user: string): Promise<boolean> {
  // se obtiene la autorizacion para acceder a la hoja de calculo
  const auth = await authorize(JSON.parse(fs.readFileSync(CRED_PATH ?? '', 'utf8')));
  const sheets = google.sheets({ version: 'v4', auth });

  // Obtener la primera hoja del documento
  const doc = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID
  });
  const sheet = doc.data.sheets ? doc.data.sheets[0] : null;
  if (!sheet || !sheet.properties || !sheet.properties.title) {
    throw new Error('No se pudo obtener la primera hoja del documento');
  }
  const sheetTitle = sheet.properties.title;

  // Definir el rango usando el título de la primera hoja
  const range = `${sheetTitle}!A1:U`;

  // Obtener los valores de la hoja
  const r = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: range
  });

  // se llama la funcion verifyUser con el nombre de usuario y el objeto sheets
  const verified = await verifyPayment(user, r.data.values);
  console.log(verified);
  return verified; // se retorna el resultado
}


// verificar si existe el usuario 
async function authUser(username: string, sheets: any): Promise<boolean> {
  const values = sheets;

  for (const row of values) { // se recorre cada fila de la hoja de calculo
    return row[2] === username; // se verifica si el nombre de usuario coincide con la primera columna
  }
  return false;
}

async function verifyPayment(username: string, sheets: any): Promise<boolean> {
  const values = sheets;
  // const fechaActual: Date = new Date();
  // const day = fechaActual.getDate();
  // const month = fechaActual.getMonth() + 1;
  // const year = fechaActual.getFullYear();
  // const fecha = `${day}/${month}/${year}`;

  for (const row of values) { // se recorre cada fila de la hoja de calculo
    if (row[2] === username) { // Verificar si el nombre de usuario coincide
      // switch (fecha) {
      //   case "10/9/2024":
      //     return row[2] === "TRUE";
      //   case "11/9/2024":
      //     return row[3] === "TRUE";
      //   case "12/9/2024":
      //     return row[4] === "TRUE";
      //   default:
      //     return false;
      // }
     return row[17] === "OK";
    }
  }
  return false; // Devolver false si no se encuentra el usuario o no coincide la fecha
}
  
// Funcion para autorizar el acceso a la API de Google
async function authorize (cred: any) {
  const { client_secret, client_id, redirect_uris } = cred.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0])

  if (TOKEN_PATH && fs.existsSync(TOKEN_PATH)) {
    oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8')))
    return oAuth2Client
  }

  return getNewToken<typeof oAuth2Client>(oAuth2Client)
}

// Funcion para obtener un nuevo token
async function getNewToken<T = any> (oAuth2Client: any): Promise<T> {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })

  console.log('Authorize this app by visiting this url:', authUrl)
  const code = await readlineAsync('Enter the code from that page here: ')
  const token = await new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err: any, token: any) => {
      err ? reject(err) : resolve(token)
    })
  })
  oAuth2Client.setCredentials(token)
  // Store the token to disk for later program executions
  if (TOKEN_PATH) {
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
  } else {
    throw new Error('TOKEN_PATH is undefined');
  }
  console.log('Token stored to', TOKEN_PATH)

  return oAuth2Client
}

// Funcion para leer una linea desde la consola
async function readlineAsync (question: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

console.log(checkCredentials("usuario1@example.com"));