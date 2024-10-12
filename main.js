let imgs = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg'
];

let currentImgIndex = 0;

let cuurentImage = document.getElementById('imageShow');

let prevImg = document.getElementById('prevImg_Button');
let nextImg = document.getElementById('nextImg_Button');


nextImg.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex + 1) % imgs.length;
    document.querySelector('img').src = imgs[currentImgIndex]
})


prevImg.addEventListener('click', function () {

    currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
    document.querySelector('img').src = imgs[currentImgIndex]

})