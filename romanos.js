function divi(numero){
    let str_num=numero.toString();
    let pot=str_num.length;
    let numeros=[];
    for(var i=0; i<str_num.length;i++){
      //console.log(parseInt(str_num[i],10)*Math.pow(10,pot-1));
      numeros.push(parseInt(str_num[i],10)*Math.pow(10,pot-1));
      pot-=1;
    }
    return numeros;
  }
  
function convertToRoman(num) {
    let numeros=divi(num);
    
    let unidades = new Map();
    unidades.set(0,"");
    unidades.set(1,"I");
    unidades.set(2,"II");
    unidades.set(3,"III");
    unidades.set(4,"IV");
    unidades.set(5,"V");
    unidades.set(6,"VI");
    unidades.set(7,"VII");
    unidades.set(8,"VIII");
    unidades.set(9,"IX");
  
    let decenas= new Map();
    decenas.set(0,"");
    decenas.set(10,"X");
    decenas.set(20,"XX");
    decenas.set(30,"XXX");
    decenas.set(40,"XL");
    decenas.set(50,"L");
    decenas.set(60,"LX");
    decenas.set(70,"LXX");
    decenas.set(80,"LXXX");
    decenas.set(90,"XC");
  
    let centenas = new Map();
    centenas.set(0,"");
    centenas.set(100,"C");
    centenas.set(200,"CC");
    centenas.set(300,"CCC");
    centenas.set(400,"CD");
    centenas.set(500,"D");
    centenas.set(600,"DC");
    centenas.set(700,"DCC");
    centenas.set(800,"DCCC");
    centenas.set(900,"CM");
  
    let miles = new Map();
    miles.set(0,"");
    miles.set(1000,"M");
    miles.set(2000,"MM");
    miles.set(3000,"MMM");
    
    console.log(numeros)
    switch (numeros.length){
    case 4:
    num =miles.get(numeros[0])+centenas.get(numeros[1])+decenas.get(numeros[2])+unidades.get(numeros[3]);
    break;
    case 3:
    num=centenas.get(numeros[0])+decenas.get(numeros[1])+unidades.get(numeros[2]);
    break;
    case 2:
    num=decenas.get(numeros[0])+unidades.get(numeros[1]);
    break;
    default:
    num=unidades.get(numeros[0]);
    break;}
    console.log(num);
return num
}


var numero_dec=document.getElementById('numero_decimal'); 

document.getElementById('botom_convertir').onclick = function() {myFunction()};

function myFunction() {
  document.getElementById('convercion').innerHTML = convertToRoman(numero_dec.value);
}
