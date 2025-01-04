let str = "Hello we are learning to code";
let Obj ={};
for(let char of str){
    Obj[char] = Obj[char]+1;  //obj["a"]+1   || 1
  //this key                    undefined  || 1
  //that will be create
  //or updated  
}
console.log(Obj);