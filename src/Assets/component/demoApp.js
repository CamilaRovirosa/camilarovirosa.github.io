const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
let count = 0;
let barInterval=setInterval(()=>{
    bar.style.width=count + "%";
    counter_num.innerHTML = count +"%";
    count++;
    if(count == 101){
        clearInterval(barInterval);
    }
}, 50)