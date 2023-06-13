import runMenu from "./menu";
import imgArrow from "../dist/images/Vector.svg"

const home = () => {
    let div = document.querySelector('#content');

    let sectionHome = document.createElement('section');
    sectionHome.classList.add('grid-home');
    div.appendChild(sectionHome);

    let sectionTitle = document.createElement('section');
    sectionTitle.classList.add('title');
    sectionHome.appendChild(sectionTitle);
    
    let titleHome = document.createElement('h1');
    titleHome.textContent = 'Reserve your table for tonight';
    titleHome.classList.add('title-home');
    sectionTitle.appendChild(titleHome);

    let seeMore = document.createElement('p');
    seeMore.classList.add('see-more');
    seeMore.textContent = 'See more';
    sectionTitle.appendChild(seeMore);

    let sectionImage = document.createElement('section');
    sectionImage.classList.add('image');
    sectionHome.appendChild(sectionImage);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    sectionImage.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    sectionImage.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    sectionImage.appendChild(image3);

    let sectionArrow = document.createElement('footer');
    sectionArrow.classList.add('arrow');
    sectionHome.appendChild(sectionArrow);

    let discover = document.createElement('p');
    discover.classList.add('discover');
    discover.textContent = 'Discover the menu';
    sectionArrow.appendChild(discover);
    
    let discoverButton = document.createElement('img');
    discoverButton.src = imgArrow;
    discoverButton.classList.add('discover-button');

    sectionArrow.appendChild(discoverButton);

    discoverButton.addEventListener('click', runMenu);
}

export default home;
