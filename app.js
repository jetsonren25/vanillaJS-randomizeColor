const body = document.querySelector('body')

const hexH1 = document.createElement('h1')
hexH1.textContent = 'Start here'

const btn = document.createElement('button')
btn.textContent = 'Randomize'

let alphanum = 'abcdef0123456789'

btn.addEventListener('click', () => {
    body.style.backgroundColor = `#${randomize()}`
    hexH1.textContent = `${randomize()}`
    hexH1.style.textTransform = 'full-width'
})


function randomize(){
    let hexColor = ''
    for(let i = 0; i < 6; i++){
        hexColor += alphanum[Math.floor(Math.random() * 16)]
    }
    return hexColor
}



body.appendChild(hexH1)
body.appendChild(btn)





// 1. Create a webpage that shows a random color and the HEX for it every time the btn is clicked
// 2. You will need a btn on the screen and a font to show the HEX color on the screen
// 3. Create a function that will randomnly select 6 characters to create a HEX color configuration
