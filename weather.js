#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"; 
import { printHelp } from "./services/log.service.js";
import { saveKeyVaue } from "./services/storage.service.js";

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //city
  }
  if (args.t) {
    saveKeyVaue('token', args.t)
  }
};


initCLI();