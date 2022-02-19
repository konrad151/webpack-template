import dummyFunction from './helpers/dummyFunction';
import './index.css';
import './index.scss';

const root = document.querySelector('.dummy-function');

if (root) {
  root.innerHTML = dummyFunction();
}
