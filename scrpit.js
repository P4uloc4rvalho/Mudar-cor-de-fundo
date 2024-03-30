const container = document.querySelector('.container')
const color = document.querySelector('input')

const defaulColor = '#fff'
container.style.backgroundColor = `${defaulColor}`

function onChangeBg(){
    container.style.backgroundColor = `${color.value}`
}