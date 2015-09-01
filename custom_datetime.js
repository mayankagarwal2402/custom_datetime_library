// Author : Mayank Agarwal
function formatDate(date, separator) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [year, month, day].join(separator);
}

function getFirstDateOfMonth(Year,Month){
    return (new Date(Year, Month,1));
}

function getLastDateOfMonth(Year,Month){
    return (new Date((new Date(Year, Month+1,1))-1));
}

function getFirstDateOfThisMonth() {
    d = new Date();
    return getFirstDateOfMonth(d.getFullYear(), d.getMonth());
}

function getLastDateOfThisMonth() {
    d = new Date();
    return getLastDateOfMonth(d.getFullYear(), d.getMonth());
}