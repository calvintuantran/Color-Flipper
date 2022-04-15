const colors = ["rgb(62,180,137)", "#6666ff", "rgba(133,122,200)", "#f15025"];
const btn =document.getElementById('btn')
// had id for btn (getElement byID gets the element)
const color = document.querySelector('.color')
//document.querySelection => returns the first element in the doucment that matches
btn.addEventListener('click',function(){
    // get a random number bween 0-3 (array has index 0 to3)
    const randomNumber= getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber]
});
//addEventListener sets up function that is called when a specific event is delivered
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length); // get decimal numbers 0- 0.999
}// multiplying by colors.length gets 0 to 3.something