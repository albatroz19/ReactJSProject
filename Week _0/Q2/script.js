var a=[1,2,3,4,5];
var iterator=0;
const loop = ()=> {
   if(iterator===a.length){
    iterator=0;
   }
   console.log(a[iterator]);
   document.getElementById("number").textContent = a[iterator];
   iterator++;
}

setInterval(loop,3000);