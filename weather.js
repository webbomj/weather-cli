#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"; 
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyVaue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyVaue('token', token);
    printSuccess('Токен сохранён');
  } catch(e) {
    printError(e.message);
  }

}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //city
  }
  if (args.t) {
    return saveToken(args.t)

  }
};


initCLI();