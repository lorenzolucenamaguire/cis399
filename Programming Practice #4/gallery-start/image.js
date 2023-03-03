const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image_filenames = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
/* Declaring the alternative text for each image file */
const alternative_text = {
    'pic1.jpg': 'Human eye',
    'pic2.jpg': 'Metamorphic Rock',
    'pic3.jpg': 'Purple Flowers',
    'pic4.jpg': 'Ancient Egypt wall',
    'pic5.jpg': 'Moth on a Leaf'
}

/* Looping through images */

for (const img of images) {
    const image = document.createElement('img');
    image.setAttribute('src', `images/${img}`);
    image.setAttribute('alt', alts[img]);
    thumbBar.appendChild(image);
    image.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

