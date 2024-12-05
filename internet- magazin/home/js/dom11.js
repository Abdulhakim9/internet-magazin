let box = document.querySelector('.box');
let Days = document.querySelector('.day');
let Hours = document.querySelector('.hour');
let Minutes = document.querySelector('.minute');
let Seconds = document.querySelector('.second');
let daysCircle = document.querySelector('.daysCircle1');
let hoursCircle = document.querySelector('.hoursCircle1');
let minutesCircle = document.querySelector('.minutesCircle1');
let secondsCircle = document.querySelector('.secondsCircle1');
let allCategory = document.querySelector('.allCategory');
let categoryes = document.querySelector('.categoryes');
let nameCategory = document.querySelector('.nameCategory');
// console.log(get(data));

var countDownDate = new Date("Jan 10, 2030 2:59:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - 1856;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 19;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var countDownData = new Date("January 29, 2030 4:59:59").getTime();
var y = setInterval(function () {
    var nov = new Date().getTime();
    var distances = countDownData - nov;

    var day = Math.floor(distances / (1000 * 60 * 60 * 24)) - 1856;
    var hour = Math.floor((distances % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 19;
    var minute = Math.floor((distances % (1000 * 60)) / (1000 * 60));
    var second = Math.floor((distances % (1000 * 60)) / 1000);

    daysCircle.innerHTML = day;
    hoursCircle.innerHTML = hour;
    minutesCircle.innerHTML = minute;
    secondsCircle.innerHTML = second;
    if (distances < 0) {
        clearInterval(y);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

let cnt = 0;
let imgSlider = document.querySelector('.imgSlider');

setInterval(() => {
    cnt++;
    if (cnt == 1) {
        imgSlider.src = '../../img/Без названия (1).jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 2) {
        imgSlider.src = '../../img/gettyimages-1440149713-170667a.jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 3) {
        imgSlider.src = '../../img/istockphoto-1297255417-612x612.jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 4) {
        imgSlider.src = '../../img/Без названия (3).jpg'
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 5) {
        imgSlider.src = '../../img/Без названия (3).jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 6) {
        imgSlider.src = '../../img/images (1).jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 7) {
        imgSlider.src = '../../img/images (2).jpg';
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 8) {
        imgSlider.src = '../../img/images.jpg'
        imgSlider.style.width = '100%';
        imgSlider.style.height = '400px';
        imgSlider.style.borderRadius = '10px';
        imgSlider.style.transition = 'all 1.275s ease-in-out';
    }
    if (cnt == 9) {
        cnt = 1;
    }
}, 2000);

export default function get(data) {
    data.forEach((product) => {
        let container = document.createElement('div');
        container.classList.add('container');

        let img = document.createElement('img');
        img.src = product.img;
        img.classList.add('img');

        let name = document.createElement('h3');
        name.innerHTML = product.name;
        name.style.width = '40px';

        let price = document.createElement('h4');
        price.innerHTML = `${product.price}`;
        price.style.color = 'red';

        let inventory = document.createElement('h4');
        inventory.innerHTML = `(${product.inventory})`;
        inventory.style.color = 'gray';

        container.append(img, name, price, inventory);
        box.append(container);
    });
}

export function getcategory(categories) {
    categories.forEach((category) => {
        let container = document.createElement('div');
        container.classList.add('containerCategory');

        let img = document.createElement('img');
        img.src = category.avatar;
        img.classList.add('imgCategory');

        let name = document.createElement('h3');
        name.innerHTML = category.name;

        container.append(img, name);
        categoryes.append(container);
    });
}

export function getName(name) {
    name.forEach((names) => {
        let name = document.createElement('h3');
        name.innerHTML = names.category;
        name.classList.add('categ');

        nameCategory.append(name);
    });
}
