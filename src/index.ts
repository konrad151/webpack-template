import changeBackground from './changeBackground';
import image from './image.png';

changeBackground();
document.querySelector('#root')!.innerHTML = `
  <img src="${image}">
`;
