import runMenu from"./menu"

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


    let sectionTab = document.createElement('section');
    sectionTab.classList.add('tab');
    sectionHome.appendChild(sectionTab);

    // button or link a
    let contact = document.createElement('button')
    contact.classList.add('contact');
    contact.textContent = 'Contact';
    sectionTab.appendChild(contact);

    let times = document.createElement('p');
    times.classList.add('times');
    times.textContent = 'Opening Times';
    sectionTab.appendChild(times);


    let sectionImage = document.createElement('section');
    sectionImage.classList.add('image');
    sectionHome.appendChild(sectionImage);

    // change with image
    let image1 = document.createElement('section');
    image1.classList.add('image-1');
    sectionImage.appendChild(image1);

    let image2 = document.createElement('section');
    image2.classList.add('image-2');
    sectionImage.appendChild(image2);

    let image3 = document.createElement('section');
    image3.classList.add('image-3');
    sectionImage.appendChild(image3);

    let sectionArrow = document.createElement('footer');
    sectionArrow.classList.add('arrow');
    sectionHome.appendChild(sectionArrow);

    let discover = document.createElement('p');
    discover.classList.add('discover');
    discover.textContent = 'Discover the menu';
    sectionArrow.appendChild(discover);
    
    let discoverButton = document.createElement('button');
    discoverButton.classList.add('discover-button');
    discoverButton.textContent = 'Need image';
    sectionArrow.appendChild(discoverButton);

    // create each times not what we want
    discoverButton.addEventListener('click', runMenu);
}

export default home;
