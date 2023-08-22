import './styles.css';

function DOMController(){
    const elem = document.createElement('div');
    elem.textContent = "This is some element";
    return elem;
}

document.body.appendChild(DOMController());