// const place = document.getElementById('place').value;

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

module.exports = validText;