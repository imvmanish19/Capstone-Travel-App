//Date in mm/dd/year format

export function dateDifference(d1,d2) {
    //Getting dates
    let date1 = new Date(d1);
    let date2 = new Date(d2);

    //Finding Difference
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    return Difference_In_Days;
} 