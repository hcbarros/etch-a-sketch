

(function game() {


    addElements()

}())

function addElements() {

    const header = createElement('div', document.body, 'class', 'header')
    header.textContent = 'Etch-a-sketch'

    const main = createElement('div', document.body, 'class', 'main')
    
    const containerButtons = createElement('div', main, 'class', 'containerButtons')
     
    const containerSquares = createElement('div', main, 'class', 'containerSquares')
    
    const containerFake = createElement('div', main, 'class', 'containerFake')

    createButtons(containerButtons)

    createToogle(containerButtons)
}   


function createElement(tag, parent, attributeType, attributeName) {
    const element = document.createElement(tag)
    element.setAttribute(attributeType, attributeName)
    return parent.appendChild(element)
}


function createToogle(containerButtons) {
    const containerToogle = createElement('div', containerButtons, 'class', 'containerToogle')
    const header = createElement('h3', containerToogle, 'class', 'toogleHeader')
    const toogle = createElement('input', containerToogle, 'type', 'range')
        toogle.setAttribute('min', 1)
        toogle.setAttribute('max', 64)
        toogle.setAttribute('value', 16)
        toogle.setAttribute('class', 'range')
    
    toogle.addEventListener('mousemove', changeRange)    
    header.textContent = toogle.value + ' X ' + toogle.value    
}


function changeRange(event) {

    const inputRange = event.target

    const toogleHeader = document.getElementsByClassName('toogleHeader')[0]    
    toogleHeader.textContent = inputRange.value + ' X ' + inputRange.value


    const containerSquares = document.getElementsByClassName('containerSquares')[0]
    const color = document.getElementById('color')

    let widthContainerSquares = containerSquares.clientWidth
    const sideSquare = parseFloat(widthContainerSquares)/inputRange.value


    for(let i = 0; i < (inputRange.value * inputRange.value); i++) {
        const square = createElement('div', containerSquares, 'style', `width: ${sideSquare}; height: ${sideSquare}`)
        square.addEventListener('mousedown', () => {
            
        })
    }

}


function createButtons(containerButtons) {
    return [null, 'Color','Rainbow','Eraser','Clear'].map((b) => {
        if(b == null) {
            const color =  createElement('input', containerButtons, 'type', 'color')
            color.setAttribute('id', 'color')
            return color
        } 
        const button =  createElement('button', containerButtons, 'class', b)
        addEventButton(button, b)    
        return button.textContent = b
    })
}


function addEventButton(button, name) {

    button.addEventListener('click', () => {
        document.querySelectorAll('button').forEach(b => {
            if(name != 'Clear' ) {
                b.classList.remove('btnClicked')
                button.classList.add('btnClicked')
            }   
        })
        
        if(name == 'Color') {
            const color = document.getElementById('color')           
            alert(color.value)
        }


    })
}