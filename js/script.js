const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for(let x = 0; x < stars.length; x++){
    stars[x].starValue = (x+1);
    console.log(stars[x]);
    //stars[x].addEventListener("click",starRate);
    ["mouseover","mouseout","click"].forEach(function(e){
        stars[x].addEventListener(e, starRate);  
    })
}


function starRate(e){
    let eventValue = e.type;
    let starValue = this.starValue;
    stars.forEach(function(ele,ind){
        if(eventValue === "click"){
            if(ind < starValue) {
                ele.classList.add("gold");
            }else{
                ele.classList.remove("gold");
            }
        }
        
    })
}