import * as fs from 'fs';
import * as jpeg from 'jpeg-js';
import { join } from 'path';

const img = fs.readFileSync(join(__dirname, 'img'));

const { data, height, width } = jpeg.decode(img, true);

const numOfPixels = height * width;
