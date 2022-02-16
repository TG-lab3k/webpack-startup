import _ from 'lodash';
import './style.css';
import Icon from './ic_test1.png';
import csvData from './data.csv';
import xmlData from './data.xml';

function component() {
    const element = document.createElement('div');

    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const xmlEle = document.createElement('div');
    xmlEle.innerHTML = xmlData;
    element.appendChild(xmlEle)

    const csvEle = document.createElement('div');
    csvEle.innerHTML = _.join(csvData, ' ');
    element.appendChild(csvEle);

    return element;
}
document.body.appendChild(component());