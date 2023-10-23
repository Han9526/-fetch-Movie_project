import { MoviesData } from './Data.js';
import { addlistener } from './Modal.js';
import { ClickBtn, EnterBtn, inputFocus } from './Search.js';


inputFocus();
await MoviesData();
addlistener();
ClickBtn();
EnterBtn();