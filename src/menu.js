import loadHome from "./home";
import homeImage from "../dist/images/Vector\ \(1\).svg";

const menu = () => {
    let div = document.querySelector('#content');

    let homePage = document.querySelector('.home-page');
    div.removeChild(homePage);

    let menuPage = document.createElement('section');
    sectionMenu.classList.add('menu-page');
    div.appendChild(sectionMenu);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    menuPage.appendChild(titleMenu);

    let homeButton = document.createElement('img');
    homeButton.src = homeImage;
    homeButton.classList.add('home-button');
    menuPage.appendChild(homeButton);

    homeButton.addEventListener('click', loadHome);

    let imageSectionMenu = document.createElement('section');
    imageSectionMenu.classList.add('image-section-menu');
    menuPage.appendChild(imageSectionMenu);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$';
    plate1.classList.add('plate-1');
    imageSectionMenu.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    imageSectionMenu.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$';
    plate2.classList.add('plate-2');
    imageSectionMenu.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$';
    plate3.classList.add('plate-3');
    imageSectionMenu.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$';
    plate4.classList.add('plate-4');
    imageSectionMenu.appendChild(plate4);

    let menuFooter = document.createElement('footer');
    menuFooter.classList.add('menu-footer')
    menuPage.appendChild(menuFooter);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    menuFooter.appendChild(titleFooter);
    
    let infoSection = document.createElement('section');
    infoSection.classList.add('info-section');
    menuFooter.appendChild(infoSection);

    let gmailText = document.createElement('p');
    gmailText.textContent = '1234@gmail.com';
    gmailText.classList.add('gmail-text');
    infoSection.appendChild(gmailText);

    let phoneNum = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    phoneNum.classList.add('phone-num');
    infoSection.appendChild(phoneNum);

    let addressText = document.createElement('p');
    addressText.textContent = '36 Road, 152 ExCity, JPN';
    addressText.classList.add('address-text');
    infoSection.appendChild(addressText);
}

export default menu;
