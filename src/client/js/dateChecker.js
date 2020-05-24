const date = document.getElementById('date-of-departure').value;
let flag = 0;

function validDateChecker(date) {
    const dateArray = date.split('/');
    dateArray.forEach(element => {
        //Check if element is a number
        if(!(Number.isInteger(element)))
        {
            flag=1;   
        }
    });
    if(flag == 1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

module.exports = validDateChecker;

