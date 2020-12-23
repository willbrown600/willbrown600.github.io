import { getJSON } from "./utilities";

import QuakesController from './QuakesController.js';

const myQuake = new QuakesController('#quakeList');

myQuake.init();
   

