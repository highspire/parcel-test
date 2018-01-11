import $ from 'jquery';
import './main.css';
import parts from './parts';
import  app  from './app';

alert(app);



// hamburger

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


$( document ).ready(function() {
    $('.sound').on('click', function(){
        $(this).toggleClass('sound--off');
    })
});


// test

if( !Array.prototype.equals ) {

	Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;
        
    var count = 0;

    for (var i = 0, l=this.length; i < l; i++) {
        
        this[i] == array[i] ? (++count) : 0;
        
    }       
    return count;
  }

}




	let questions = [

    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1

	], link = '/assets/tracks/track-', answers = [];
  
  //Трэк загрузился
  function trackLoaded() {
  
  	
  
  }
  
  //Трек проиграл
  function trackEnded(trackId) {
  
    
  
  }
  
  //Грузим трэк
  function loadTrack(trackId) {
  
  	let track = new Audio(`${link}-${trackId}.mp3`);
    
    track.loadedtata = () => {
    
        trackLoaded();
      track.play();
    
    }
    
    track.ended = () => {
    
    	trackEnded(trackId);
    
    }
    
    return track;
  
  }
  
  //Получаем ответ пользователя
  function getAnswer(answer) {
  
  	answers.push(+answer);
  
  }
  
  function result() {
  
  	let percent = questions.equals(answers) * 10;
    
    //Код отображения результата
    
  
  }
  
  //Воспроизводим трэк
  function play(trackId) {
  	
    let track = loadTrack(trackId);
    
    
  
  }

//Начинаем тест
function beginTest() {
  
    play(1);
  
}

function getAnswer (answer) {

    answers.push(answer);
    
};

$('.controller__column-choise').on('click', function(){

    if($(this).hasClass('controller__column-choise--true')){

        getAnswer(1);

    } else {

        getAnswer(0);

    }

});