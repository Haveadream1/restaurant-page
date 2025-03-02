import loadMenu from "./menu";
import arrowImage from "../dist/images/Vector.svg"

const home = () => {
    let div = document.querySelector('#content');

    let homePage = document.createElement('section');
    homePage.classList.add('home-page');
    div.appendChild(homePage);

    let titleSection = document.createElement('section');
    titleSection.classList.add('title-section');
    homePage.appendChild(titleSection);
    
    let titleH1 = document.createElement('h1');
    titleH1.textContent = 'Reserve your table for tonight';
    titleH1.classList.add('title-h1');
    titleSection.appendChild(titleH1);

    let titleText = document.createElement('p');
    titleText.classList.add('title-text');
    titleText.textContent = 'See more';
    titleSection.appendChild(titleText);

    let imageSection = document.createElement('section');
    imageSection.classList.add('image-section');
    homePage.appendChild(imageSection);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    imageSection.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    imageSection.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    imageSection.appendChild(image3);

    let homeFooter = document.createElement('footer');
    homeFooter.classList.add('home-footer');
    homePage.appendChild(homeFooter);

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
