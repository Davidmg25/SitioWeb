let numeros =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];

let tarjetaopen =0;
let tarjeta1=null;
let tarjeta2=null;
let firstScore =null;
let secondScore =null;
let movimientos =0;
let aciertos=0;
let veraciertos= document.getElementById('aciertos');
let vermomientos =document.getElementById('movimientos');
let vertiempo =document.getElementById('tiempo');
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
let timer = 100;
let tiempoi =100;

let winaudio = new Audio('./sonidos/win.wav');
let loseaudio = new Audio('./sonidos/lose.wav');
let clickaudio = new Audio('./sonidos/click.wav');
let okaudio = new Audio('./sonidos/ok.wav');
let errorAudio = new Audio('./sonidos/error.wav');

let tiemporegresivoId = null;
let temporizador =false;


function sumtime(){
    tiemporegresivoId =setInterval(() => {
        vertiempo.innerHTML= `Tiempo: ${timer} segundos`;
        timer -- ;
        if(timer <0 ){
            clearInterval(tiemporegresivoId);
            bloqueartarjetas(numeros);
            loseaudio.play();
        }
        
        
    },1000,timer);
}
function bloqueartarjetas(){
    for(let i=0;i<=30;i++){
        let tarjetabloqueada =document.getElementById(i);
        tarjetabloqueada.innerHTML=`<img src="img/${numeros[i]}.png" alt="imagen reto"> ` ;
        tarjetabloqueada.disabled=true;
    }
}

function destapar(id){

    if(temporizador  == false){
        sumtime();
        temporizador  =true;
    }
tarjetaopen ++;
console.log(tarjetaopen)
if(tarjetaopen == 1){
    //se mostrar la imagen correcta
    
    tarjeta1= document.getElementById(id);
    firstScore= numeros[id];
    
    tarjeta1.innerHTML =`<img src="img/${firstScore}.png" alt=""> ` ;
    clickaudio.play();
    //se desabilita el boton para que no aumente el contador de abrir tarjetas

    tarjeta1.disabled =true;

}else if(tarjetaopen == 2){
    tarjeta2 =document.getElementById(id)
    secondScore=numeros[id]
    tarjeta2.innerHTML =`<img src="img/${secondScore}.png" alt=""> ` ;
    tarjeta2.disabled=true;
    movimientos++;
    vermomientos.innerHTML =`Movimientos: ${movimientos}`;

    if(firstScore ==secondScore){
        tarjetaopen =0;
        aciertos++;
        okaudio.play();
        veraciertos.innerHTML=`Aciertos: ${aciertos}`;
        if(aciertos==15){
            clearInterval(tiemporegresivoId)
            veraciertos.innerHTML =`Aciertos: ${aciertos} 😱🥵🤯`;
            vertiempo.innerHTML =`Increible!! 🥳🥳🥳 Tan solo te tomo ${tiempoi-timer} segundos`;
            vermomientos.innerHTML =`Movimientos: ${movimientos}🥹`;
            winaudio.play();
        }
    
    }else{
        setTimeout(()=>{
            errorAudio.play();
            tarjeta1.innerHTML=' ';
            tarjeta2.innerHTML=' ';
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetaopen=0;
        },800);
    }
}
}