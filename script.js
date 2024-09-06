const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile('programa.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const data = XLSX.utils.sheet_to_json(sheet, { header: 'A' });

// Function to convert Excel time to military time format
function convertExcelTimeToMilitary(excelTime) {
  console.log({ excelTime });
  if (excelTime === null || excelTime === undefined) return null;

  const totalMinutes = Math.round(excelTime * 24 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// Process data and create events array
const events = data.slice(1).map((row, index) => ({
  eventId: index + 1,
  title: row['E'],
  description: row['F'],
  eventDay: parseInt(row['B']) + 9,
  hourStart: convertExcelTimeToMilitary(row['I']),
  hourEnd: convertExcelTimeToMilitary(row['J']),
  locationId: row['H'],
}));

// Create the bulk insert script
const bulkInsertScript = `
const events = ${JSON.stringify(events, null, 2)};

Event.bulkCreate(events)
  .then(() => {
    console.log('Events inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting events:', error);
  });
`;

// Write the output to output.js
fs.writeFileSync('output.js', bulkInsertScript);

console.log('Bulk insert script has been written to output.js');
