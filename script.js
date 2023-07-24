

(function game() {


    addElements()

}())

function addElements() {

    document.body.style.background = 'rgb(240,240,240)'
    document.body.style.zIndex = 1

    const header = createElement('div', document.body, 
            'text-align: center; z-index: 2; font-size: 85px; font-weight: bold; margin-top: 30px')
    header.textContent = 'Etch-a-sketch'

    const styleMain = 'margin:auto; display:flex; justify-content: space-between; ' +
        'width: 70vw; height: 80vh; margin-top: 30px; z-index: 2'
    const main = createElement('div', document.body, styleMain)

    const styleButtons = 'display:flex; align-items:center; justify-content: space-between; flex-direction: column; ' +
                            'width: 190px; height: 500px'    
    const containerButtons = createElement('div', main, styleButtons)

    const styleSquare = 'display:grid; background: #fff; min-width: 500px; height: 500px; ' +
                       `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`     
    const containerSquares = createElement('div', main, styleSquare)
    
    const containerFake = createElement('div', main, styleButtons)

    createButtons(containerButtons)

    createToogle(containerButtons)
}


function createElement(tag, parent, style) {
    const element = document.createElement(tag)
    element.setAttribute('style', style)
    return parent.appendChild(element)
}


function createToogle(containerButtons) {
    const header = createElement('h3', containerButtons, 'color: #000; text-align: center')
    const toogle = createElement('input', containerButtons, '')
            .setAttribute('type', 'range')
            .setAttribute('min', 1)
            .setAttribute('max', 64)
            .setAttribute('value', 16)
            .setAttribute('class', 'range')
    
    header.textContent = toogle.value + ' X ' + toogle.value    
}


function createButtons(containerButtons) {
    return [null, 'Color','Rainbow','Eraser','Clear'].map((b) => {

        if(b == null) {
            return createElement('input', containerButtons, '').setAttribute('type', 'color')
        }
        const style = 'font-size: 16px; width: 190px; height: 40px; outline: none; ' +
                'border: 1px solid #000; border-radius: 5px;  cursor:pointer' 
        const button =  createElement('button', containerButtons, style)
        return button.textContent = b
    })
}

