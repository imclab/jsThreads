function GOOD(message) {
    $("body").append("<h2>Success: " + message + "</h2>");
}
function ERROR(message) {
    $("body").append("<h2>Failure: " + message + "</h2>");
}


Log = {};
Log.error = function (mess, cause) {
    console.error(mess);
    throw new Exception(mess, cause);
};
Log.alert = function (mess) {
    alert(mess);
};

Log.warning = console.warn;


