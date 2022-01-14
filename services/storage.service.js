import { homedir } from 'os';
import { join } from 'path';

const filePath =  join(homedir(), 'weather-data.json');

const saveKeyVaue = (key, value) => {
  console.log('s')
}

export {saveKeyVaue}