const pythonElement = document.getElementById('python');
const webElement = document.getElementById('web');
const modalPythonElement = document.getElementById('modal-python');
const modalWebElement = document.getElementById('modal-web');
const closePythonElement = document.getElementById('close-python');
const closeWebElement = document.getElementById('close-web');
const bodyElement = document.getElementsByTagName('body')[0];

pythonElement.addEventListener('click', () => {
    modalPythonElement.classList.add('active');
    bodyElement.style.overflowY = 'hidden';
});
webElement.addEventListener('click', () => {
    modalWebElement.classList.add('active');
    bodyElement.style.overflowY = 'hidden';
});

closePythonElement.addEventListener('click', () => {
    modalPythonElement.classList.remove('active');
    bodyElement.style.overflowY = 'scroll';
});
closeWebElement.addEventListener('click', () => {
    modalWebElement.classList.remove('active')
    bodyElement.style.overflowY = 'scroll';
});

modalPythonElement.addEventListener('click', () => {
    modalPythonElement.classList.remove('active');
    bodyElement.style.overflowY = 'scroll';
});
modalWebElement.addEventListener('click', () => {
    modalWebElement.classList.remove('active');
    bodyElement.style.overflowY = 'scroll';
});

document.querySelector('.modal__python').addEventListener('click', (event) => {
    event.stopPropagation();
});
document.querySelector('.modal__web').addEventListener('click', (event) => {
    event.stopPropagation();
});
