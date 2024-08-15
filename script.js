const pythonElement = document.getElementById('python');
const webElement = document.getElementById('web');
const modalPythonElement = document.getElementById('modal-python');
const modalWebElement = document.getElementById('modal-web');
const closePythonElement = document.getElementById('close-python');
const closeWebElement = document.getElementById('close-web');

pythonElement.addEventListener('click', () => {
    modalPythonElement.classList.add('active');
});
webElement.addEventListener('click', () => {
    modalWebElement.classList.add('active');
});

closePythonElement.addEventListener('click', () => {
    modalPythonElement.classList.remove('active')
});
closeWebElement.addEventListener('click', () => {
    modalWebElement.classList.remove('active')
});

modalPythonElement.addEventListener('click', () => {
    modalPythonElement.classList.remove('active')
});
modalWebElement.addEventListener('click', () => {
    modalWebElement.classList.remove('active')
});

document.querySelector('.modal__python').addEventListener('click', (event) => {
    event.stopPropagation();
});
document.querySelector('.modal__web').addEventListener('click', (event) => {
    event.stopPropagation();
});