function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 

    document.getElementsByClassName('age')[0].innerHTML += Math.abs(age_dt.getUTCFullYear() - 1970);;
}