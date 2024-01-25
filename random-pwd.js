function randompassword(string){
    let randomstring ='';

    for (let i = 0; i <= string.length; i++){
        let strlen = Math.floor(Math.random()*string.length);
        randomstring =randomstring +string[strlen];
       
    }
    return randomstring;
}

let input = "asdfg123456§$%";
let randpwd = randompassword(input);
console.log(randpwd);