import React from "react";
import "../styles/Loader.scss";

const Loader = () => {
    const bar = document.querySelector(".loading__bar--inner");
    const counter_num = document.querySelector(".loading__counter--number");
    let count = 0;
    let barInterval=setInterval(()=>{
        bar.style.width=count + "%";
        counter_num.innerHTML = count +"%";
        count++;
        if(count === 101){
            clearInterval(barInterval);
        }
    }, 50)
    return (
        
    <div class="loading">
        <div class="loading__box">
            <div class="loading__text">
                <div class="loading__text--border"></div>
                CAMILA                 
            </div>
            <div class="loading__text">
                R<div class="loading__text--dot"></div>VIROSA
            </div>
            
            
            <div class="loading__bar">
                <div class="loading__bar--inner"></div>
            </div>
            <div class="loading__counter">
                <span>0%</span>
                <div class="loading__counter--number">100%</div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Loader;
