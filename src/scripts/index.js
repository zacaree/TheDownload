import mod1 from "./module1";
import { mod2part1, mod2part2 } from "./module2";
import mod3 from './module3';
import fileSystem from 'fs';

console.log(mod1);
console.log(mod2part1);
console.log(mod2part2);
console.log(mod3)

const app = document.getElementById('app');
const textFromFile = document.getElementById('textFromFile');

const text = fileSystem.readFileSync(__dirname + '/../../copy.txt', 'utf8');
textFromFile.innerHTML = text;