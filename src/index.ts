import dummyFunction from './dummyFunction';
import './index.css';
import './index.scss';

const root = document.querySelector('.dummy-function');

if (root) {
  root.innerHTML = dummyFunction();
}
