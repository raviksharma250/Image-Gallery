let button = document.querySelectorAll("button");
 
 
let img= document.querySelectorAll("img");

button.forEach((button) => {
     
    button.addEventListener("click",() => {
        let filter = button.innerHTML.toLowerCase();

        img.forEach((img) => {
            
            if(filter === "all"){
                img.style.display="block";
    
            }
            else if (img.classList.contains(filter)){
                img.style.display= "block";
    
            }
            else{
                img.style.display= "none";
            }

    });
     
     
    });
});

 
 
 


