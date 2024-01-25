
function reverse(string){
    console.log(string);
    let result =  string.split('');
    console.log(result);
    let result1 = result.reverse();
    console.log(result1);
    let result2 = result1.join('');
    console.log(result2);
}


reverse("Hello");