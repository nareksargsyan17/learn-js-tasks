import {ui} from './UI.js';
import Numbers from './Numbers.js';
import Clear from './Clear.js';
import Backage from './Backage.js';
import Point from './Point.js';
import ForEqual from './ForEqual.js';
import Review from './Review.js';
import Divosion from './Division.js';
import Multiplication from './Multiplication.js';
import Plus from './Plus.js';
import Substraction from './Substraction.js';
import Equal from './Equal.js';
import Minus from './Minus.js';
Numbers(ui)
Clear(ui);
Backage(ui);
Point(ui);
Divosion(ui, Review);
Multiplication(ui, Review);
Plus(ui, Review);
Substraction(ui, Review);
Equal(ui, ForEqual);
Minus(ui);


