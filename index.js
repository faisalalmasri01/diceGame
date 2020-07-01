const randomNumber1 = Math.floor(Math.random() * 6)
const randomNumber2 = Math.floor(Math.random() * 6)
function dice1(value){
    document.querySelector('.img1').setAttribute('src',value)
}
function dice2(value){
    document.querySelector('.img2').setAttribute('src',value)
    
}
function randomer(){
    switch(randomNumber1){
        case 0:
            dice1('images/dice1.png')
            break
        case 1:
            dice1('images/dice2.png')
            break
        case 2:
            dice1('images/dice3.png')
            break
        case 3:
            dice1('images/dice4.png')
        break
    case 4:
        dice1('images/dice5.png')
        break
    case 5:
        dice1('images/dice6.png')
        break
        
    }
    //   random 2
    switch(randomNumber2){
        case 0:
            dice2('images/dice1.png')
            break
        case 1:
            dice2('images/dice2.png')
            break
        case 2:
            dice2('images/dice3.png')
            break
        case 3:
            dice2('images/dice4.png')
        break
    case 4:
        dice2('images/dice5.png')
        break
    case 5:
        dice2('images/dice6.png')
        break
        
    }
}


randomer()
function changeTitle(value){
    document.querySelector('h1').innerHTML = value
}
function setTheWinner(){
    if(randomNumber1 == randomNumber2){
        changeTitle('tie')
    }else if(randomNumber1 > randomNumber2){
        changeTitle('player one is winner')
    }else {
        changeTitle('player two is winner')
    }
}
setTheWinner()