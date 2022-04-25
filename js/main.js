const div = document.createElement('div');
const h2 = document.createElement('h2');
const img = document.createElement('img');
const body = document.querySelector('body');
let day = document.querySelector('#calendar').value;




document.querySelector('button').addEventListener('click', getDayBefore)

function getPic() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BEIi4NNCAww71WvZ6aqQgAa2eKK6LlhAhmH80wik&date=${day}`)
        .then(res => res.json())
        .then(data =>{
            console.log(day)
            document.querySelector('h2').innerText = data.title;
            document.querySelector('img').src = data.url;
            document.querySelector('p').innerText = data.explanation;    
            console.log(data)  
            console.log(new Date())  
        })
        .catch(err => {
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
        let date = day.split('-');
        console.log(date)
        if(date[1] == 1 && date[2] == 1){
            date[0] -= 1
            date[1] = 12;
            date[2] = 31;
            day = `${date[0]}-${date[1]}-${date[2]}`
            console.log(day)
            getPic()
        }else if(date[2] == 1){
            date[1] -= 1;
            day = `${date[0]}-${date[1]}-${months[date[1]]}`
            console.log(day)
            getPic()
        }else{
            day = `${date[0]}-${date[1]}-${(date[2])-1}`
            console.log(day)
            getPic()
        }
        
    
}    



//check to see which radio button is selected

//if slideshow is selected, make the day tick down per a certain amount of time
//slideshow doesn't need to have the paragraph, just the title
//have a time delay between each loop iteration
//set up css to have some keyframe effect on the movement per iteration
//if the date is selected, show the calendar option.
//for the date, show the full description and everything
