// for(initialision,condition,increament)

// for(let a=1;a<=10;a++ ){  //a+=2
//     console.log(a)
// }

// let i=1;
// while(i<=15){
//     console.log(i)
//     i++;
// }

//  reverse loop--->

// for(let i=10;i>=1;i--){ //i-=2
//     console.log(i)
// }

// let a=10;
// while(a>=1){
//     console.log(a);
//     a--;
// }   

// Break and continue ---> 
// let num=7;
// for(let i=0;i<=10;i++){
//     if(i==num){    // (i==3 && i==5 && i==7){ //-->false    // (i==3 || i==5 || i==7){
//         continue;  // break;
//     }
//     console.log(i)
// }

// && --> All the condition should be true then only it will go ahead.
// || --> any one of the condition needs to be true.

// index           0                   1            2              3     // arr.length=4
 //let arr = ["Butter Nan" , "Gralic Naan","Butter Roti","Paratha"]
// .print everythink in the list
// for loop
// start condition incriment
// index =0
//arr.length
//1++

     // 3<4
// for(i=0;i<arr.length;i++){
//     // console.log("order :" ,i+1 ,arr[i])    //arr[i]
//     console.log(`Order ${i+1} : ${arr[i]}`)
// }

// let chaiType = ["Massala Chai","ginger Tea"];
// let snacks =["smosa","pakoda","Bisket"];

// for(let i=0;i<chaiType.length;i++){
//     for(let j=0;j<snacks.length;j++){
//         console.log("combo :",chaiType[i] + " " + snacks[j]);
//     }
// }

// let arr = ["Butter Nan" , "Gralic Naan","Butter Roti","Paratha"]
// for(let i=0;i<arr.length;i++){
//     conbsole.log(arr[i]);
// }

//for loop ---> for of loop ---> for in loop
// let rotis = ["Butter Nan" , "Gralic Naan","Butter Roti","Paratha"]
// for(let roti of rotis){
//     console.log(roti)  //ans---> Butter Nan ,Gralic Naan ,Butter Roti,Paratha
// }

// let parcels = [2,5,7,9] //heaviest of these--> 9
// let maxWeigth = 0 //kg
// // for(let parcel of parcels){
// //     if(parcel>maxWeigth){
// //         maxWeigth=parcel;
// //     }
// // }
// for(let i=0;i<parcels.length;i++){
//     if(parcels[i]>maxWeigth){
//         maxWeigth = parcels[i];
//     }
// }
// console.log(maxWeigth)  // 9

//let str = "Hello World";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }
// for(let char of str){
//     console.log(char);
// }

// let str ="TikTokt";
// let count =0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=="T" || str[i]=="t"){
//         count++;
//     }
// }

// for(let Char of str){
//     if(Char.toLowerCase()=="t")   //Char =="t" || Char=="T"
//         count++;
// }
// console.log(count) ;       

// let str="TikTok";
// // for(let i=str.length-1;i>=0;i--){
// //       console.log(str[i])    // reverse string -->  k o T k i T
// // }
// let reverse=""
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str[i];  //  reverse string
// }
// console.log(reverse) //koTkiT

//for in loop--->
// let obj = {name:"Tommy",age:9,address:"xyz"};
// for(let key in obj){
//     console.log(key + ":" + obj[key]) //name , age , address : Tommy , 9 , xyz
// }

// let str = "Hello we are learning to code"
// let obj ={};
// if the obj[key] is present inside the object it will return its value else it will return undefined
//console.log(obj["a"])  //-->undefined

// for(let char of str){
//     if(obj[char]==undefined){
//         obj[char]=1; // it will create the key and assign the value as 1
//     }
//     else{
//         obj[char]++;
//     }
// }
// for(let i=0;i<str.length;i++){
//     if(obj[str[i]]==undefined){
//         obj[str[i]]=1;
//     }else{
//         obj[str[i]]++;
//     }
// }

let str = "Hello we are learning to code";
let Obj ={};
for(let char of str){
    Obj[char] = Obj[char]+1;  //obj["a"]+1   || 1
  //this key                    undefined  || 1
  //that will be create
  //or updated  
}
console.log(Obj);