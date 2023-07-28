
const options = {Color: true    , Rainbow: false, Eraser: false, Clear: false};
let init = false;


(function game() {

    const header = createElement('div', document.body, 'class', 'header')
    header.textContent = 'Etch-a-sketch'

    const main = createElement('div', document.body, 'class', 'main')
    
    const containerButtons = createElement('div', main, 'class', 'containerButtons')
     
    const containerSquares = createElement('div', main, 'class', 'containerSquares')
    
    const containerFake = createElement('div', main, 'class', 'containerFake')

    createButtons(containerButtons)

    createToogle(containerButtons)
}())


function createElement(tag, parent, attributeType, attributeName) {
    const element = document.createElement(tag)
    element.setAttribute(attributeType, attributeName)
    if(parent != null) {
        parent.appendChild(element)
    }
    return element
}


function createToogle(containerButtons) {
    const containerToogle = createElement('div', containerButtons, 'class', 'containerToogle')
    const header = createElement('h3', containerToogle, 'class', 'toogleHeader')
    const toogle = createElement('input', containerToogle, 'type', 'range')
        toogle.setAttribute('min', 1)
        toogle.setAttribute('max', 64)
        toogle.setAttribute('value', 16)
        toogle.setAttribute('class', 'range')

    addSquares(toogle)    
    toogle.addEventListener('mouseup', (e) => addSquares(e.target))    
    toogle.addEventListener('mousemove', (e) => {
        header.textContent = e.target.value + ' X ' + e.target.value     
    })
    header.textContent = toogle.value + ' X ' + toogle.value    
}


function addSquares(inputRange) {

    const containerSquares = document.getElementsByClassName('containerSquares')[0]

    containerSquares.innerHTML = ''

    let widthContainerSquares = containerSquares.clientWidth
    const sideSquare = parseFloat(widthContainerSquares)/inputRange.value

    for(let i = 0; i < inputRange.value * inputRange.value; i++) {
        createElement('div', containerSquares, 'class', 'square')
    }

    containerSquares.style.gridTemplateColumns = `repeat(auto-fill, minmax(${sideSquare}px, 1fr))`

    if(init == false) {
        init = true
        paint()
    }        

}


function paint() {
    
    const containerSquares = document.getElementsByClassName('containerSquares')[0]

    containerSquares.addEventListener('mousedown', (e) => {
        
        [...containerSquares.children].map(square => {
            square.addEventListener('mouseover', () => {

                if(options['Color'] == true) {
                    const color = document.getElementById('color')
                    square.style.background = color.value
                }
                if(options['Rainbow'] == true) {
                    const color1 = Math.floor(Math.random() * 257)
                    const color2 = Math.floor(Math.random() * 257)
                    const color3 = Math.floor(Math.random() * 257)
                    square.style.background = `rgb(${color1},${color2},${color3})`
                }
                if(options['Eraser'] == true) {
                    square.style.background = '#fff'
                }
    
            })
        })
    })  
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
        if(b == 'Color') {
            button.classList.add('btnClicked')
        }
        return button.textContent = b
    })
}


function addEventButton(button, name) {

    button.addEventListener('click', () => {
        
        if(name == 'Clear') {
            document.querySelectorAll('.square').forEach(s => s.style.background = '#fff') 
            return
        }
        document.querySelectorAll('button').forEach(b => {
            options[b.textContent] = false
            b.classList.remove('btnClicked')
            button.classList.add('btnClicked')
        }) 
        options[name] = true
    })
}