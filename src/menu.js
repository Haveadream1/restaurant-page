const menu = () => {
    let div = document.querySelector('#content');

    let sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    div.appendChild(sectionMenu);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    sectionMenu.appendChild(titleMenu);

    let sectionImageMenu = document.createElement('section');
    sectionImageMenu.classList.add('image-menu');
    sectionMenu.appendChild(sectionImageMenu);

    let image4 = document.createElement('section');
    image4.classList.add('image-4');
    sectionImageMenu.appendChild(image4);

    let image5 = document.createElement('section');
    image5.classList.add('image-5');
    sectionImageMenu.appendChild(image5);

    let image6 = document.createElement('section');
    image6.classList.add('image-6');
    sectionImageMenu.appendChild(image6);

    let image7 = document.createElement('section');
    image7.classList.add('image-7');
    sectionImageMenu.appendChild(image7);

    let footer = document.createElement('footer');
    div.appendChild(footer);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    footer.appendChild(titleFooter);
    
    let alignFooter = document.createElement('section');
    alignFooter.classList.add('align-footer');
    footer.appendChild(alignFooter);

    let gmail  = document.createElement('p');
    gmail.textContent = '1234@gmail.com';
    gmail.classList.add('gmail');
    alignFooter.appendChild(gmail);

    let phoneNum  = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    phoneNum.classList.add('phone-num');
    alignFooter.appendChild(phoneNum);

    let address  = document.createElement('p');
    address.textContent = '36 Road, 152 ExCity, JPN';
    address.classList.add('address');
    alignFooter.appendChild(address);

    let removeHome = document.querySelector('.grid-home');
    div.removeChild(removeHome);
}

export default menu;