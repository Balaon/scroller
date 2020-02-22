let data = [
    {
        name: 'Юрий',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam debitis perferendis non rerum eaque beatae, nemo quis modi aliquid!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique quasi quia quisquam hic laboriosam neque suscipit nihil omnis molestiae!'
    },
    {
        name: 'Витя',
        text: 'Lorem ipsum rerum eaque beatae, nemo quis modi aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique quasi quia quisquam hic laboriosam neque suscipit nihil omnis molestiae!'
    },
    {
        name: 'Галя',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique quasi quia quisquam hic laboriosam neque suscipit nihil omnis molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam debitis perferendis non rerum eaque beatae, nemo quis modi aliquid!'
    },
    {
        name: 'Люда',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique quasi quia quisquam hic laboriosam neque suscipit nihil omnis molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam debitis perferendis non rerum eaque beatae, nemo quis modi aliquid!'
    }
];

let page = 0;
let rootElem = document.getElementById('root');
let galContainer = document.createElement('div');



let film = document.createElement('div');
film.classList.add('film');

galContainer.classList.add('galContainer');

data.forEach(function (elem) {
    let cardElem = document.createElement('div');
    let photoElem = document.createElement('div');
    let photocell = document.createElement('div');
    let nameElem = document.createElement('h2');
    let textElem = document.createElement('p');

    photoElem.classList.add('photoElem');
    photocell.classList.add('photocell');

    cardElem.classList.add('card');
    nameElem.innerText = elem.name;
    textElem.innerText = elem.text;

    photocell.appendChild(photoElem);
    photocell.appendChild(nameElem);

    cardElem.appendChild(photocell);
    cardElem.appendChild(textElem);

    film.appendChild(cardElem);
});


let rightBtn = document.createElement('div');
let leftBtn = document.createElement('div');

rightBtn.addEventListener('click', goRight);
leftBtn.addEventListener('click', goLeft);

rightBtn.classList.add('rightBtn');
leftBtn.classList.add('leftBtn');

rightBtn.innerText = '>';
leftBtn.innerText = '<';

galContainer.appendChild(rightBtn);
galContainer.appendChild(leftBtn);
galContainer.appendChild(film);

rootElem.appendChild(galContainer);

let pointContainer = document.createElement('div');
pointContainer.classList.add('pointContainer');



let switcher = false

data.forEach(function () {
    let point = document.createElement('div');
    point.classList.add('point');
    if (switcher == false) {
        switcher = !switcher
        point.classList.add('active');
    }
    point.addEventListener('click', function () {
        let points = [...document.querySelectorAll('.point')];
        page = points.indexOf(this);
        activation(points.indexOf(this));
        film.style.marginLeft = `-${page}00%`;

    });
    pointContainer.appendChild(point);

});

galContainer.appendChild(pointContainer);

function resize() {
    film.style.width = data.length * galContainer.offsetWidth + 'px';
    document.querySelectorAll('.card').forEach(elem => elem.style.width = galContainer.offsetWidth + 'px')
}
resize();

function activation(thisElem) {

    let elems = document.querySelectorAll('.point')
    for (const term of elems) {
        term.classList.remove('active')
    }
    elems[thisElem].classList.add('active')

}

function goLeft() {
    if (page == 0) {
        return
    }
    page--;
    film.style.marginLeft = `-${page}00%`;
    activation(page);
    console.log(film);
}

function goRight() {
    if (page == data.length - 1) {
        return;
    }
    page++;
    film.style.marginLeft = `-${page}00%`;
    activation(page);
    console.log(film);

}

window.addEventListener('resize', resize);