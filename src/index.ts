import dummyFunction from './dummyFunction';

const root = document.querySelector('.dummy-function');

if (root) {
  root.innerHTML = dummyFunction();
}
