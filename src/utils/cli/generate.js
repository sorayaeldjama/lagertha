const fs = require('fs');

const actionName = process.argv.slice(2)[0];

const upperActionName = actionName.toUpperCase();
const camelActionName = `${actionName[0].toUpperCase()}${actionName.slice(1).toLowerCase()}`;
const lowerActionName = actionName.toLowerCase();

// creation du fichier action
const actionpath = `src/actions/${lowerActionName}.ts`;

if (!fs.existsSync(actionpath)) {
   
  const textAction = `import { ${camelActionName}State } from "@/reducers/${lowerActionName}Reducer";

  export enum ${camelActionName}Type  {
    CHANGE_${upperActionName}PAGE_FIELDS = 'CHANGE_${upperActionName}PAGE_FIELDS'

  }
  
  export const change${camelActionName}PageFields = (payload: Partial<${camelActionName}State> ) => ({
    type: ${camelActionName}Type.CHANGE_${upperActionName}PAGE_FIELDS,
    payload,
  });
  `;

  fs.writeFile(actionpath, textAction, (err) => {
    if (err) throw err;
  });
}
// creation du reducer
const reducerpath = `src/reducers/${lowerActionName}Reducer.ts`;

if (!fs.existsSync(reducerpath)) {
  const textReducer = `import { ${camelActionName}Type } from '@/actions/${lowerActionName}';
  export type ${camelActionName}State = {

  }

  const initialState: ${camelActionName}State= {
  };
  
  const ${lowerActionName}Reducer = (state: ${camelActionName}State = initialState, action: any = {}) => {
    switch (action.type) {
      case ${camelActionName}Type.CHANGE_${upperActionName}PAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ${lowerActionName}Reducer;
  `;

  fs.writeFile(reducerpath, textReducer, (err) => {
    if (err) throw err;
  });
}

// creation du middleware

const middlewarepath = `src/middlewares/${lowerActionName}Middleware.ts`;

if (!fs.existsSync(middlewarepath)) {
  const textMiddleware = `import { RootState } from "@/store";
  import { Middleware } from "redux";

  const ${lowerActionName}Middleware: Middleware<{}, RootState> = (store) => (next) => async (action) => {
    switch (action.type) {
      default:
        next(action);
    }
  };
  
  export default ${lowerActionName}Middleware;
  `;

  fs.writeFile(middlewarepath, textMiddleware, (err) => {
    if (err) throw err;
  });
}
