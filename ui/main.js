console.log('Loaded!');

//Change the text of the main-text div
var element = document.getEmementById('main-text'
);
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};