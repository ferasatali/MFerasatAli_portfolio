// sheetsService.ts
const API_KEY = "AIzaSyDV_WQXAcXmiHsjuxkCthtRRMw7h62cgkM";
const CLIENT_ID =
  "137890598189-12psfmk7bkgqls4bj2fcmokdh2elmpcu.apps.googleusercontent.com";
const DISCOVERY_DOCS = [
  "https://docs.google.com/spreadsheets/d/16WUWHMMk0rgzh6Kc9kLIykYQwm9hRpUR07DLQXRWSE4/edit#gid=0",
];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

export const loadSheetsApi = async () => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    };
    document.body.appendChild(script);
  });
};


export const addRowToSheet = async (spreadsheetId: string, sheetName: string, values: string[]) => {
  try {
    await loadSheetsApi();

    const sheets = (gapi.client as any).sheets;

    const params = {
      spreadsheetId,
      range: `${sheetName}!A:A`,
      valueInputOption: 'RAW',
      resource: {
        values: [values],
      },
    };

    const response = await sheets.spreadsheets.values.append(params);

    console.log('Row added successfully:', response.result);
    return response.result;
  } catch (error) {
    console.error('Error adding row to sheet:', error);
    throw error;
  }
};