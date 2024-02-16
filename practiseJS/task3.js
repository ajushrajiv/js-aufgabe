
function random(string){
    let newstr ='';
    for (let i=0; i<=string.length; i++){
        let strlen= Math.floor(Math.random()*string.length)
        newstr+=string[strlen];
    }
    return newstr;
}

let inp="axbnuiqwr98z4r980ß";
let out= random(inp);
console.log(out);