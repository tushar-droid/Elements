import "./styles.css";
import homeIcon from './assets/home-icon.png'
import aboutIcon from './assets/about-icon.png'
import contactIcon from './assets/contact-icon.png'
import gitIcon from './assets/git-icon.png';

function CreateMenu() {

    const container= document.createElement('div');
    container.classList.add('menu-container');


    const menulist = document.createElement('ul');
    menulist.classList.add('menu-list');

    var elem = []
    elem.push(createMenuItems('Home', homeIcon ));
    elem.push(createMenuItems('About', aboutIcon ))
    elem.push(createMenuItems('Connect', contactIcon ))
    elem.push(createMenuItems('Git', gitIcon))
    elem.forEach(el => {
        menulist.appendChild(el);
    });

    container.appendChild(menulist);

    return container;
}

function createMenuItems(name, icon){
    
    const item = document.createElement('li');
    item.classList.add('menu-item');


    const itemdiv = document.createElement('div');
    itemdiv.classList.add('itemdiv');


    const front = document.createElement('div');
    front.classList.add('flip-front');


    const back = document.createElement('div');
    back.classList.add('flip-back');

    front.textContent = name;
    back.innerHTML = `<img src =${icon} class='icon'>`;
    
    itemdiv.appendChild(front);
    itemdiv.appendChild(back);
    item.appendChild(itemdiv)
    return item;
}


document.body.appendChild(CreateMenu());
