const A:HTMLAudioElement = new Audio('DrumPad/A.mp3');
const B:HTMLAudioElement = new Audio('DrumPad/C.mp3');
const C:HTMLAudioElement = new Audio('DrumPad/F.mp3');
const D:HTMLAudioElement = new Audio('DrumPad/G.mp3');
const E:HTMLAudioElement = new Audio('DrumPad/hihat.mp3');
const F:HTMLAudioElement = new Audio('DrumPad/kick.mp3');
const G:HTMLAudioElement = new Audio('DrumPad/laugh-1.mp3');
const H:HTMLAudioElement = new Audio('DrumPad/laugh-2.mp3');
const I:HTMLAudioElement = new Audio('DrumPad/snare.mp3');

let myVariable;
let Beat1: HTMLAudioElement [] = [F,I,E]; 
let Beat:HTMLAudioElement []= [F, I, E, A, B, C, D, G, H]; 


document.querySelector(".button1").addEventListener('click', function() {
    playSample(A);
});
document.querySelector(".button2").addEventListener('click', function() {
    playSample(B);
});
document.querySelector(".button3").addEventListener('click', function() {
    playSample(C);
});
document.querySelector(".button4").addEventListener('click', function() {
    playSample(D);
});
document.querySelector(".button5").addEventListener('click', function() {
    playSample(E);
});
document.querySelector(".button6").addEventListener('click', function() {
    playSample(F);
});
document.querySelector(".button7").addEventListener('click', function() {
    playSample(G);
});
document.querySelector(".button8").addEventListener('click', function() {
    playSample(H);
});
document.querySelector(".button9").addEventListener('click', function() {
    playSample(I);
});



function playSample(var1) {

var1.play();

}

let i = 0; 

document.querySelector('#play').addEventListener('click', function() {
    i=0;
   myVariable = setInterval(function( ) {

        playSample(Beat1[i]); 
                
        if(i>setInterval.length){
            i = 0; 
        }
        else{
             i++; 
        }
        
        document.querySelector("#play").setAttribute("style", "visibility : hidden" )
        document.querySelector("#pause").setAttribute("style", "visibility : visible" )
       
    }, 500);
  
});

document.querySelector("#pause").addEventListener("click", function() {

    document.querySelector("#play").setAttribute("style", "visibility : visible" )
        document.querySelector("#pause").setAttribute("style", "visibility : hidden" )

       
        clearInterval(myVariable); 
       
}); 


document.querySelector("#mix").addEventListener("click", function() {
             
    Beat1=[]; 
  while(Beat1.length < 3){
    var a = Math.floor(Math.random() * 9);
     Beat1.push(Beat[a]); 
    
   }
  }); 


 
 