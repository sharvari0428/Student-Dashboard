function calculateAttendance(){

let attended =
document.getElementById("attended").value;

let total =
document.getElementById("total").value;

let percent =
(attended/total)*100;

document.getElementById("result").innerHTML =
"Attendance: " +
percent.toFixed(2) + "%";
}

function addTask(){

let task =
document.getElementById("task").value;

let li =
document.createElement("li");

li.innerText = task;

document.getElementById("list")
.appendChild(li);

document.getElementById("task").value = "";
}

function countdown(){

let exam =
new Date(
document.getElementById("examDate").value
);

let today =
new Date();

let diff =
exam - today;

let days =
Math.floor(
diff/(1000*60*60*24)
);

document.getElementById("days").innerHTML =
days + " days left";
}

function convert(){

let cgpa =
document.getElementById("cgpa").value;

let percentage =
cgpa * 9.5;

document.getElementById("percentage").innerHTML =
"Percentage: " +
percentage.toFixed(2) + "%";
}
