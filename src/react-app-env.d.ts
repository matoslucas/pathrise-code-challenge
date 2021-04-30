/// <reference types="react-scripts" />
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_API_URL: "http://localhost:8080/";
        DB_CONNECTION:"mongodb+srv://lucas:LpIhNqgVkrKkpP6V@cluster0.m4y7o.mongodb.net/Cluster0?retryWrites=true&w=majority";
        NODE_ENV: 'development' | 'production';
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}