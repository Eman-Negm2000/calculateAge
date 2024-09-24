

function calc(){

    var userAge = Number(document.getElementById("userAge").value);
    var date =new Date();
    var outpotAge=date.getFullYear()-userAge;
    document.getElementById('age').innerHTML=`  Your age is  <span>`+ outpotAge + `</span> year`;
    
    if(outpotAge>=18){

        document.getElementById('message').innerHTML=`  You are young   `;

    }
    else{
        document.getElementById('message').innerHTML=`  You are kid   `;
    }

    for(var i=1 ;i<=outpotAge;i++){
        document.getElementById('numOffChars').innerHTML +="*";

    }


}