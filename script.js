/*inch to feet*/
function convert(inchconverter){
    document.getElementById("output").innerHTML=inchconverter/12
}

/*factorial count*/
function factorial(n){
    var fact = 1;
    for(var i =1; i <= n; i++){
        var fact = fact *i;
    }
    document.getElementById("factorialoutput").innerHTML=fact;
}