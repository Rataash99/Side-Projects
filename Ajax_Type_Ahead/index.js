
const endpoint = "./cities.json"
const cities = [];

fetch(endpoint)
.then(response => response.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){

    const regex = new RegExp(wordToMatch, 'gi')

    return cities.filter(place =>{
        return place.name.match(regex) || place.state.match(regex)
    })
}
function numberToBinary(x){
    let number = Number(x)
    return number.toString(2)
}
function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    
    const html = matchArray.map(place => {

        const regex = new RegExp(this.value, 'gi')

        const cityName = place.name.replace(regex, `<span class = "hl">${this.value}</span>`)

        const stateName = place.state.replace(regex, `<span class = "hl">${this.value}</span>`)

        return `
        <li>
        <span class = "name">${cityName}, ${stateName}</span>
        <span class = "id">${numberToBinary(place.id)}</span>
        </li>
        `;
    }).join(" ")
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change',displayMatches)
searchInput.addEventListener('keyup',displayMatches)

