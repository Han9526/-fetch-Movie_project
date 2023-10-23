import {MoviesData} from './Data.js';
import {addlistener} from './Click-Event.js';
import { ClickBtn,EnterBtn,inputFocus } from './Search.js';


async function Order() {
    inputFocus();
    await MoviesData();
    addlistener();
   
}

Order();
ClickBtn();
EnterBtn();