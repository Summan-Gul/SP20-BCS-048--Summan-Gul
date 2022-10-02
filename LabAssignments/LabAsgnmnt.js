/**Problem1 */
let args=[2,3,1,6,7];
let m=0;
let x=parseInt(args[0]);
let y=parseInt(args[1]);
for(let i=0;i<y;i++)
{
    m=args[1]
}
//console.log((y+1),"kth digit from the last is="+m);

/**Problem2 */

var value = 23618;
sum = value.toString().split('').map(Number).reduce(function(a,b){return a+b},0);
//console.log(sum);

/**Problem3 */

let arr=[2,3,6,1,7];
function filter_function(numb){
if(numb%2===0){
    return numb;
}
}
let arr_filtered= arr.filter(filter_function);
//console.log(arr_filtered)


function reduce_func(arr_filtered,numb){
    return arr_filtered+numb;
}
let result=arr.reduce(reduce_func);
//console.log(result);

/**Problem4 */

var a;
//onsole.log("number\tSquare\tCube\n");
//console.log("===================\n");

for(a=0;a<=10;a++){
//console.log(a,a*a,a*a*a);
}

/**Problem5 */
var str = prompt("enter the input");
if(isNaN(str)){
    str = str.toUpperCase();
    for(var i=0; i<str.length; i++){
        var chr = str.charAt(i);
        if(chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U'){
           break;
        }
        if(i<str.length)
        console.log("the position of the left most vowel is "+(i+1));
        else
            console.log("no vowel found in the entered string");
    }
         else{
             var num,rev=0,remainder;
             num=parseInt(str);
             while(num!=0){
                remainder=num%10;
                num=parseInt(num/10);
                rev=rev*10+remainder;
             }
             console.log("reverse of "+str+" is "+rev);
        
    }

}
/**Problem 6 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })
guess = ()=>{
    let randomNum = Math.floor(Math.random() * 10) + 1;
    readline.question(`What's your guess`, (number) =>{
        console.log(`You guessed ${number}`);
    
    if (number == randomNum) {
        console.log("You guessed it right!");
    }
    else {
        console.log("You guessed it wrong!");
    }
    });
}
guess();

/**PProblem 7*/
let check =(arr)=> {
    if (arr.length >= 2) {
        if (arr[0] == 10 || arr[arr.length - 1] == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
//console.log(check([05,10,15,20,25,30,35,40,45,50]));

/**Problem 8 */
function alphabet_order(str)
{
    return str.split('').sort().join('');
} 
//console.log(alphabet_order("COMSATS"));


