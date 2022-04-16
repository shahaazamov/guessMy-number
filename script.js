const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const guessInput = document.querySelector('.guess')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const body = document.querySelector('body')
let Guess=document.querySelector('h1')
let modal=document.querySelector('.modal')
let overlay=document.querySelector('.overlay')
let changing= document.querySelector('.changing')
let close =document.querySelector('.close')


let scorePlayer = 20
let highscore = 0

// Creating random number
let randomNumber = Math.floor(Math.random()* 20 )+ 1
console.log(randomNumber);

checkBtn.addEventListener('click' , () =>{
    if(guessInput.value){
    if(guessInput.value  == randomNumber){
        message.textContent = 'epladiz✔'
        body.style.background = '#60b347'
        number.textContent = randomNumber
        Guess.innerHTML='Congratulation'
        highscore.innerHTML= scorePlayer
        changing.innerHTML= scorePlayer
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        // let randomNumber = Math.floor(Math.random()* 20 )+ 1
        if( scorePlayer < highScore){
        highScore == scorePlayer
        highScore.textContent = scorePlayer
        }
    }
        if(guessInput.value < randomNumber){
        message.textContent = "too low"
        scorePlayer--
        score.textContent = scorePlayer
    }else if(guessInput.value >= randomNumber){
        message.textContent = 'to high'
        scorePlayer--
        score.textContent = scorePlayer
    }else{
        message.textContent = 'no number yet🤑'
    }
}
})
againBtn.addEventListener('click', ()=>{
    body.style.background = '#111'
    scorePlayer = 20
    message.textContent = 'start guessing...'
    score.textContent = 0
    number.textContent = '?'
    guessInput.textContent = ''
    let randomNumber = Math.floor(Math.random()* 20 )+ 1
    console.log(randomNumber);


    close.addEventListener('click',function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
})
