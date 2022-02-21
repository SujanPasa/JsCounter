let counter = 0;
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");


decrease.addEventListener("click", function(){
    counter -= 1;
    updateCounter(counter);
    return counter;


});

reset.addEventListener("click", function(){
    counter = 0;
    updateCounter(counter);
    console.log("clicked decrease");
    return counter;


});


increase.addEventListener("click", function(){
    counter += 1;
    updateCounter(counter);
    return counter;
})

function updateCounter(counter){
    document.getElementsByClassName("count")[0].innerText = counter;
    if(counter < 0){
        document.getElementsByClassName("count")[0].style.color = "red";
    }else if (counter > 0){
        document.getElementsByClassName("count")[0].style.color = "green";
    }else{
        document.getElementsByClassName("count")[0].style.color = "#102a42";
    }
    
}