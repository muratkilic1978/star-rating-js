const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

// for loop that iterates through all stars
for(let x = 0; x < stars.length; x++){
    // In order to distinguish between the different stars, we assign them a unique number
    stars[x].starValue = (x+1);
    console.log(stars[x]);
    //stars[x].addEventListener("click",starRate);
    ["click"].forEach(function(e){
        stars[x].addEventListener(e, starRate);  
    })
}


function starRate(e){
    //eventValue is keeping track of the eventType eg. click, mouseover mouseout 
    let eventValue = e.type;
    //console.log(eventValue);
    // starValue is keeping track of how many stars you have clicked on
    let starValue = this.starValue;
    //console.log(starValue);
    stars.forEach(function(elem,index){
        console.log(elem);
        console.log(index);
        if(index < starValue){
            elem.classList.add("gold");
            
        }else{
            elem.classList.remove("gold");
        }
        output.innerHTML = "You rated this "+starValue+ " stars";
    })
    }
    
    
