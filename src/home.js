import loadMenu from "./menu";
import arrowImage from "../dist/images/Vector.svg"

const home = () => {
    let div = document.querySelector('#content');

    /* Header */
    let homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    div.appendChild(homeHeader);
    
    let homeHeaderTitle = document.createElement('h1');
    homeHeaderTitle.textContent = 'Discover the different taste of Asian cuisine';
    homeHeader.appendChild(homeHeaderTitle);

    let homeHeaderText = document.createElement('p');
    homeHeaderText.classList.add('home-header-text');
    homeHeaderText.textContent = 'at Yul restaurant';
    homeHeaderTitle.appendChild(homeHeaderText);

    /* Main */
    let homeMain = document.createElement('main');
    homeMain.classList.add('home-main');
    div.appendChild(homeMain);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    homeMain.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    homeMain.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    homeMain.appendChild(image3);

    /* Footer */
    let homeFooter = document.createElement('footer');
    homeFooter.classList.add('home-footer');
    div.appendChild(homeFooter);

    let footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Discover the menu';
    homeFooter.appendChild(footerText);
    
    let menuButton = document.createElement('img');
    menuButton.src = arrowImage;
    menuButton.classList.add('menu-button');
    homeFooter.appendChild(menuButton);

    menuButton.addEventListener('click', loadMenu);
}

export default home;

