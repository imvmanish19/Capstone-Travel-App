// const date = document.getElementById('date-of-departure').value;
function validDateChecker(date) {
    let flag = 0;
    const dateArray = date.split('/').map(Number);
    dateArray.forEach((element,index) => {
        //Check if element is a number
        if(index == 1) {
            if(element>12)
            {
                flag=1;
            }
        }
        if(index == 0) {
            if(element>31)
            {
                flag=1;
            }
        }
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
