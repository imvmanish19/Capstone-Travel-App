//Main function 
const eventHandling = document.getElementById('mainform').addEventListener('submit', (event) => {
    event.preventDefault();
    handleEventFunction();
});

function handleEventFunction() {

    let destiny = document.getElementById('place').value;
    let startDate = document.getElementById('date-of-departure').value;
    let endDate = document.getElementById('date-of-end').value;
    //Current Date
    let today = new Date();
    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    if(!(validText(destiny)))
    {
        alert('Enter Valid Destination');
    }
    else {
        let totalTripDays = dateFormatter(startDate,endDate);
        let totalWaitingDays = dateFormatter(todayDate,startDate);
        dateUI(totalTripDays,totalWaitingDays);
    }
}

//Date Formatter (yyyy-mm-dd) to (mm/dd/yyyy)
function dateFormatter(date1,date2) {
    let format1 = date1.split('-').map(Number);
    let format2 = date2.split('-').map(Number);
    let newDate1 = `${format1[1]}/${format1[2]}/${format1[0]}`;
    let newDate2 = `${format2[1]}/${format2[2]}/${format2[0]}`;
    //Calling Date Difference Function with new date formats
    return dateDifference(newDate1,newDate2);
}

//UI Update of Date
function dateUI(trip,wait) {
    let element = document.querySelector('.final-one');
    let output = `
    <div id="count" style="padding:3px">
    <h1 id="bigo" style="font-size:30px; color:white">Countdown</h1>
    <h2>Total Number Of Days Left For The Trip: <span style="color: lime">${wait}</span></h2>
    <h2>Total Trip Duration: <span style="color:blue;">${trip}</span></h2>
    </div>
    `
    element.innerHTML = output;
}

function validText(place) {
    let letters = /^[A-Za-z]+$/;
    if(place.match(letters)){
        return true;
    }
    else
    {
        return false;
    }
}

function dateDifference(d1,d2) {
    //Getting dates
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    //Finding Difference
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    return Difference_In_Days;
} 

