const menu = () => {
    let div = document.querySelector('#content');

    let sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    div.appendChild(sectionMenu);

    let h3 = document.createElement('h3');
    h3.textContent = 'Weekly menu';
    sectionMenu.appendChild(h3);

    let footer = document.createElement('footer');
    div.appendChild(footer);

    let h2 = document.createElement('h2');
    h2.textContent = 'Contact info';
    footer.appendChild(h2);

    let gmail  = document.createElement('p');
    gmail.textContent = '1234@gmail.com';
    footer.appendChild(gmail);

    let phoneNum  = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    footer.appendChild(phoneNum);

    let address  = document.createElement('p');
    address.textContent = '36 Road, 152 ExCity, JPN';
    footer.appendChild(address);
}

export default menu;