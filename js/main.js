//DOM Manipulation variables
let img = document.querySelector('img')
let h2 = document.querySelector('h2')
let desc = document.querySelector('p')

//Variables used for switching between single phot or slideshow
let slideshow = document.querySelector('#slideshow')
let date = document.querySelector('#date');

//Date of the displayed photo
let currentDate;

document.querySelector('button').addEventListener('click', getPic);

//Function that fetches the API
function getPic(){
    day = document.getElementById('calendar').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BEIi4NNCAww71WvZ6aqQgAa2eKK6LlhAhmH80wik&date=${getVar()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            img.src = data.url;
            h2.innerText = data.title; 
            desc.innerText = data.explanation; 
            currentDate = data.date;
            if(slideshow.checked == true){
                setTimeout(getPic, 6000);
            } 
        })
        .catch(err =>{
            console.log(err);
        })
}
//Determines which variable to use for the API date. The day selected, or the slideshow of pictures
function getVar() {
    if(slideshow.checked == true){
        if(currentDate == undefined){
            currentDate = day;
        }
        return getDayBefore();
    }else{
        return day;
    }
}
//Months Object for use in the getDayBefore function
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
//Gets the day before the date of the current API photo
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


