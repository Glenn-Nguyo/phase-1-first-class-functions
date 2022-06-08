//const { spy } = require("chai");


function returnsANamedFunction(){
 return returnsANamedFunction;
}
function  receivesAFunction(callback){
   callback();
}
//var fn = function (){
    //fn = returnsAnAnonymousFunction()
   // return fn()
//}
function returnsAnAnonymousFunction(){
    return () => {};
    }