import { EMPTY_STRING } from '../constants';
import * as fs from 'fs/promises';

export const readTxtFile = async () => {
  try {
    const data = await fs.readFile('../../alert-text.txt', 'utf8');

    return data.replace('\n', EMPTY_STRING);
  } catch (err) {
    throw new Error(err);
  }
};
