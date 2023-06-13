import runHome from "./home";

const menu = () => {
    let div = document.querySelector('#content');

    let sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    div.appendChild(sectionMenu);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    sectionMenu.appendChild(titleMenu);

    let returnHome = document.createElement('img');
    returnHome.classList.add('return-home');
    sectionMenu.appendChild(returnHome);

    returnHome.addEventListener('click', function() {
        div.removeChild(sectionMenu);
        runHome();
    })

    let sectionImageMenu = document.createElement('section');
    sectionImageMenu.classList.add('image-menu');
    sectionMenu.appendChild(sectionImageMenu);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$'
    plate1.classList.add('plate1');
    sectionImageMenu.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    sectionImageMenu.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$'
    plate2.classList.add('plate2');
    sectionImageMenu.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$'
    plate3.classList.add('plate3');
    sectionImageMenu.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$'
    plate4.classList.add('plate4');
    sectionImageMenu.appendChild(plate4);

    let sectionBottom = document.createElement('footer');
    sectionBottom.classList.add('bottom')
    sectionMenu.appendChild(sectionBottom);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    sectionBottom.appendChild(titleFooter);
    
    let alignFooter = document.createElement('section');
    alignFooter.classList.add('align-footer');
    sectionBottom.appendChild(alignFooter);

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