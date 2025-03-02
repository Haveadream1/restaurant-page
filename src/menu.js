import loadHome from "./home";
import homeImage from "../dist/images/Vector\ \(1\).svg";

const menu = () => {
    let div = document.querySelector('#content');

    let homeHeader = document.querySelector('.home-header');
    div.removeChild(homeHeader);
    let homeMain = document.querySelector('.home-main');
    div.removeChild(homeMain);
    let homeFooter = document.querySelector('.home-footer');
    div.removeChild(homeFooter);

    /* Header */
    let menuHeader = document.createElement('header');
    menuHeader.classList.add('menu-header');
    div.appendChild(menuHeader);

    let menuHeaderTitle = document.createElement('h1');
    menuHeaderTitle.textContent = 'Weekly menu';
    menuHeaderTitle.classList.add('menu-title');
    menuHeader.appendChild(menuHeaderTitle);

    let homeButton = document.createElement('img');
    homeButton.src = homeImage;
    homeButton.classList.add('home-button');
    menuHeader.appendChild(homeButton);

    homeButton.addEventListener('click', () => {
        let menuHeader = document.querySelector('.menu-header');
        div.removeChild(menuHeader);
        let menuMain = document.querySelector('.menu-main');
        div.removeChild(menuMain);
        let menuFooter = document.querySelector('.menu-footer');
        div.removeChild(menuFooter);

        loadHome();
    });

    /* Main */
    let menuMain = document.createElement('main');
    menuMain.classList.add('menu-main');
    div.appendChild(menuMain);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$';
    plate1.classList.add('plate-1');
    menuMain.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    menuMain.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$';
    plate2.classList.add('plate-2');
    menuMain.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$';
    plate3.classList.add('plate-3');
    menuMain.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$';
    plate4.classList.add('plate-4');
    menuMain.appendChild(plate4);

    /* Footer */
    let menuFooter = document.createElement('footer');
    menuFooter.classList.add('menu-footer');
    div.appendChild(menuFooter);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    menuFooter.appendChild(titleFooter);
    
    let infoSection = document.createElement('section');
    infoSection.classList.add('info-section');
    menuFooter.appendChild(infoSection);

    let gmailText = document.createElement('p');
    gmailText.textContent = '1234@gmail.com';
    infoSection.appendChild(gmailText);

    let phoneNum = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    infoSection.appendChild(phoneNum);

    let addressText = document.createElement('p');
    addressText.textContent = '36 Road, 152 ExCity, JPN';
    infoSection.appendChild(addressText);
}

export default menu;
