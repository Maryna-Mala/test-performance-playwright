declare global {
    namespace NodeJS {
      interface ProcessEnv {
        LOGIN_EMAIL: string;
        VALID_PASSWORD: string;
        INVALID_PASSWORD: string;
      }
    }
  }
  
  export {};
  