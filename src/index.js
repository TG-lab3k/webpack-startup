import _ from 'lodash';
import './style.css';
import Icon from './ic_test1.png';
import csvData from './data.csv';
import xmlData from './data.xml';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const csvEle = document.createElement('div');
    csvEle.innerHTML = _.join(csvData, ' ');
    csvEle.classList.add('hello');
    element.appendChild(csvEle);

    return element;
}
document.body.appendChild(component());