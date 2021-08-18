function process() {
    //Declare variables
    var gpa, hwA, mdE, fe, par,
        gpaP, hwAP, mdP, feP, paP,
        final_avg;
    var errMsg1 = "<span style='font-weight: bold; color: red; font-size: 20px;'>NaN</span>";
    var errMsg2 = "<span style='font-weight: bold; color: red; font-size: 20px;'>weird</span>";
    //get GPA value from form using getElementById
    gpa = document.getElementById("GPA").value;
    hwA = document.getElementById("hwAvg").value;
    mdE = document.getElementById("midExam").value;
    fe = document.getElementById("finalExam").value;
    par = document.getElementById("participation").value;
    // Validate input - if not then alert error msg...else proceed
    if (isNaN(hwA) || isNaN(mdE) || isNaN(fe) || isNaN(par) || hwA == "" ||
        mdE == "" || fe == "" || par == "" || hwA < 0 || hwA > 100 || mdE > 100 || mdE < 0 || fe < 0 || fe > 100 || par < 0 || par > 100) {
        document.getElementById("errOut").innerHTML = errMsg1;
    } else if (gpa < 0 || gpa > 4 || gpa == "" || isNaN(gpa)) {
        document.getElementById("errOut").innerHTML = errMsg2;
    } else {
        gpaP = parseFloat(gpa);
        hwAP = parseInt(hwA);
        mdP = parseInt(mdE);
        feP = parseInt(fe);
        paP = parseInt(par);
        //Calculate final average
        final_avg = (.5 * hwAP) + (.3 * mdP) + (.2 * feP) + (.1 * paP);
        window - alert;
        switch (true) {
            case (final_avg >= 90):
                document.getElementById("results").window - alert("The final average is " + Math.round(final_avg) +
                    ". The final grade is A, EXCELLENT WORK!")
                break;
            case (final_avg >= 80):
                document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                    "<br>The final grade is B<br>Good work!")
                break;
            case (final_avg >= 70):
                document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                    "<br>The final grade is C<br>Average work!")
                break;
            case (final_avg >= 60):
                document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                    "<br>The final grade is D<br>Poor work!<br>Student must retake the course")
                break;
            default:
                document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                    "<br>The final grade is F\nFailing work!<br>Student must retake the course")
        }
    }
}

function res() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("errOut").innerHTML = "";
}

function process1() {
    var sq1, sq2, sq3, sq4;
    sq1 = parseInt(document.getElementById("Item1").value);
    sq2 = parseInt(document.getElementById("Item2").value);
    sq3 = parseInt(document.getElementById("Item3").value);
    sq4 = parseInt(document.getElementById("Item4").value);
    document.getElementById("sq1").value = sq1;
    document.getElementById("sq2").value = sq2;
    document.getElementById("sq3").value = sq3;
    document.getElementById("sq4").value = sq4;

    sum1 = sq1 * 239.99;
    sum2 = sq2 * 129.75;
    sum3 = sq3 * 99.95;
    sum4 = sq4 * 350.89;
    document.forms["myform1"].elements["co1"].value = sum1.toFixed(2);
    document.forms["myform1"].elements["co2"].value = sum2.toFixed(2);
    document.forms["myform1"].elements["co3"].value = sum3.toFixed(2);
    document.forms["myform1"].elements["co4"].value = sum4.toFixed(2);

    sum5 = (sum1 + sum2 + sum3 + sum4);
    document.forms["myform1"].elements["IncoM"].value = sum5.toFixed(2);
    sum6 = (sum5 * 0.9) / (4);
    document.forms["myform1"].elements["IncoW"].value = sum6.toFixed(2);
}

function convertC() {
    if ($("#convertForm").valid()) {
        var input, c, f;
        input = parseInt(document.getElementById("temip").value);
        f = input;
        c = 5 / 9 * (f - 32);
        document.getElementById("results1").value = Math.round(c) + (" Celsius");
    }
}

function convertF() {
    if ($("#convertForm").valid()) {
        var input, c, f;
        input = parseInt(document.getElementById("temip").value);
        c = input;
        f = (9 / 5 * c) + 32;
        document.getElementById("results1").value = Math.round(f) + (" Fahrenheit");
    }
}