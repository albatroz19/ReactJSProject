var a=0;
function counter(){
    function increment(){
        a++;
        document.getElementById("number").textContent = a;
    }
    function decrement(){
        console.log(a);
        document.getElementById("number").textContent = a;
        a--;
    }
    return {
        increment,
        decrement
    };
}
b=10;
function realCounter(){
    const count = counter();
    if(a<10 && b===10){
        count.increment();
    }
    else{
        count.decrement();
        b--;
        if(b===0){
            b=10;
        }
    }
}
setInterval(realCounter,1000);