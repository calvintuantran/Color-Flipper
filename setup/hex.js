const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color=document.querySelector('.color');

// hext colors at #number letter number 
// example #f15025
btn.addEventListener('click',function(){
    let hexColor= '#'
    for (let i=0;i<6; i++){
       hexColor+= hex[Math.floor(Math.random()*hex.length)]
    } // hex color iterates through hex and finds a random element of the list
    // appends the list to create a color
    document.body.style.backgroundColor= hexColor;
    color.textContent=hexColor
    // looks at the class color text which is #F1f5f8 
    // this also changes the text to match the color and update it
    //.textContent  returns the element text content of color
})

//looks for the click