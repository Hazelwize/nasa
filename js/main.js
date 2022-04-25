
let img = document.querySelector('img')
let h2 = document.querySelector('h2')
let desc = document.querySelector('p')
let slideshow = document.querySelector('#slideshow')
let date = document.querySelector('#date');
let currentDate;

document.querySelector('button').addEventListener('click', getPic);


function getPic(){
    day = document.getElementById('calendar').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BEIi4NNCAww71WvZ6aqQgAa2eKK6LlhAhmH80wik&date=${day}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            img.src = data.url;
            h2.innerText = data.title; 
            desc.innerText = data.explanation; 
            currentDate = data.date;
            if(slideshow.checked == true){
                slideDelay();
            } 
        })
        .catch(err =>{
            console.log(err);
        })
}

function slideDelay() {
    setTimeout(startSlideshow, 6000)
}



function startSlideshow() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BEIi4NNCAww71WvZ6aqQgAa2eKK6LlhAhmH80wik&date=${getDayBefore()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            img.src = data.url;
            h2.innerText = data.title; 
            desc.innerText = data.explanation; 
            currentDate = data.date; 
            if(slideshow.checked == true){
                slideDelay();
            }
        })
        .catch(err =>{
            console.log(err);
        })
}




const months = {
    01: 31,
    02: 28,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31,
}

function getDayBefore(){
    let dateArr = currentDate.split('-');
    console.log(date)
    if(dateArr[1] == 1 && dateArr[2] == 1){
        dateArr[0] -= 1
        dateArr[1] = 12;
        dateArr[2] = 31;
        return `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`
    }else if(dateArr[2] == 1){
        dateArr[1] -= 1;
        return `${dateArr[0]}-${dateArr[1]}-${months[dateArr[1]]}`
    }else{
        return `${dateArr[0]}-${dateArr[1]}-${(dateArr[2])-1}`
        }  
}    


// run the function and continue the function if it is checked to loop to another function.