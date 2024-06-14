var themeModo = document.documentElement;
var switchClick = document.getElementById('switch');
var optionsContent = document.getElementById('options__content');
var content = document.getElementById('content__countries');

switchClick.onclick = (e) => {
    if (switchClick.checked) {
        themeModo.setAttribute('data-theme', 'light')
    } else {
        themeModo.setAttribute('data-theme', 'dark')
    }
}


const textChange = optionsContent.children[0].children[0]
const options = optionsContent.children[1]
optionsContent.onclick = (e) => {
    optionsContent.children[1].classList.toggle('block')
    optionsContent.children[0].children[1].classList.toggle('rotate')
}

options.onclick = (e) => {
    let text = e.target.textContent
    console.log(text)
    if (text.length < 50) {
        textChange.textContent = text
    }
}

const dataUser = [
    {
        region:'Africa'
    },
    {
        region:'Americas'
    },
    {
        region:'Asia'
    },
    {
        region:'Europe'
    },
    {
        region:'Oceania'
    },
]
let selecUser = 1;

function createElement(item){
    const countrie = document.createElement('div')
    countrie.classList.add('countrie')
    const imagen = document.createElement('img')
    imagen.setAttribute('src', item.flags.png)

    const contenInfo = document.createElement('div')

    const name = document.createElement('h3')
    name.textContent = item.name

    const population = document.createElement('p')
    population.textContent = 'Population'
    const populationinfo = document.createElement('span')
    populationinfo.textContent = item.population
    population.appendChild(populationinfo)

    const region = document.createElement('p')
    region.textContent = 'Region'
    const regioninfo = document.createElement('span')
    regioninfo.textContent = item.region
    region.appendChild(regioninfo)

    const capital = document.createElement('p')
    capital.textContent = 'Capital'
    const capitalinfo = document.createElement('span')
    capitalinfo.textContent = item.capital
    capital.appendChild(capitalinfo)


    contenInfo.appendChild(name)
    contenInfo.appendChild(population)
    contenInfo.appendChild(region)
    contenInfo.appendChild(capital)

    countrie.appendChild(imagen)
    countrie.appendChild(contenInfo)
    content.appendChild(countrie)
}

function selectUser(data){
    for (const item of data) {
        if(item.region === dataUser[selecUser].region){
            console.log(item)
            createElement(item)
        }
        
    }
}
async function solicitud() {
    try {
        const dataCountries = await fetch('data.json')
        const data = await dataCountries.json()

        selectUser(data)
    } catch (error) {
        console.log(error)
    }
}

(() => {
    solicitud()
})()