// gapi.d.ts

declare let gapi: {
    load(apiName: string, callback: () => void): void;
    client: {
      init(params: {
        apiKey: string;
        clientId: string;
        discoveryDocs: string[];
        scope: string;
      }): Promise<void>;
    };
  };
  