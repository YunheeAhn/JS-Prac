const hexElements = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
console.log(hexElements)

function clickHandler() {
    
    let hexCode = '#'
    for(let i = 1; i <= 6; i++) {
        hexCode += hexElements[getRandomNumber()]
    }
    
    document.querySelector('.content h1 span:first-child').innerText = `Background Color`
    document.querySelector('.content h1 span:last-child').innerText = `${hexCode}`
    document.body.style.backgroundColor = hexCode;
    document.querySelector('.content h1 span:last-child').style.color = hexCode;

    console.log('색상변하기~')
    console.log(hexCode)
}

function getRandomNumber() {
    return Math.floor(Math.random() * (hexElements.length - 1))
}

clickHandler();
document.querySelector('.content button').addEventListener('click', clickHandler)