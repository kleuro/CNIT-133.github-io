function goToNewPage(myForm) {
    var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
    window.location = mydest;
}

var cesusArray = [
    ["AL", "Alabama", "Montgomery", "4,887.871"],
    ["AK", "Alaska", "Juneau", "737,438"],
    ["AZ", "Arizona", "Phoenix", "7,171,646"],
    ["AR", "Arkansas", "Little Rock", "3,010,825"],
    ["CA", "California", "Sacramento", "39,557,045"],
    ["CO", "Colorado", "Denver", "5,694,564"]
];

function ButtonPressed() {
    var searchKey = document.forms["SearchForm"].elements["inputCenVal"].value
    searchKey = searchKey.toUpperCase();
    var found = false;
    for (var row = 0; row < cesusArray.length; row++) {
        if ((cesusArray[row][0] == searchKey) || (cesusArray[row][1] == searchKey)) {
            document.getElementById("errorplace").innerHTML = "Thanks for your inquiry, here is the information you requested"
            document.forms["SearchForm"].elements["state_abbr"].value = cesusArray[row][0];
            document.forms["SearchForm"].elements["state_name"].value = cesusArray[row][1];
            document.forms["SearchForm"].elements["capital"].value = cesusArray[row][2];
            document.forms["SearchForm"].elements["population"].value = cesusArray[row][3];
            row = cesusArray.length;
            found = true;
        }
    }
    if (found == false) {
        document.getElementById("errorplace1").innerHTML = "Please insert the correct State Abbr and State Name"
        document.forms["SearchForm"].elements["state abbr"].value = "State Abbr not found!";
        document.forms["SearchForm"].elements["state name"].value = "State not found!";
        document.forms["SearchForm"].elements["capital"].value = "Capital not found!";
        document.forms["SearchForm"].elements["population"].value = "Population not found!";
    }
}