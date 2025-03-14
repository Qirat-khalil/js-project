let math = +prompt("enter math number");
let sci = +prompt("enter sci number");
let bio = +prompt("enter bio number");
let chem = +prompt("enter chem number");
let eng = +prompt("enter eng number");

let totalMark = 600;
let oneSubTotal = 120

let sumNum = math + sci + bio + chem + eng;
// document.write(sumNum, "total number")

let per = (sumNum / totalMark) * 100
let percent = (math / oneSubTotal) * 100
let percent1 = (sci / oneSubTotal) * 100
let percent2 = (bio / oneSubTotal) * 100
let percent3 = (chem / oneSubTotal) * 100
let percent4 = (eng / oneSubTotal) * 100


function getGrade(marks) {
    if (marks >= 80) return "A+";
    else if (marks >= 70) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";

}

let grade = getGrade(sumNum);


document.write(" <h1 style='text-align:center;  font-weight: bold;'> Progress Report </h1> <table style='  padding: 10px; margin:0 auto; box-shadow: 3px 3px 10px black; background-color: rgb(200, 160, 240); border-radius: 8px;'>" +
    "<tr style='border: 1px solid black;'>" +
    "<td style='box-shadow: 4px 4px 10px purple;  border-radius: 8px; black; padding: 10px; text-align:center; text-align:center; background-color: rgb(218, 201, 50);'>" +
    "<h2>Subject Name</h2>" +
    "</td>" +

    "<td style='box-shadow: 4px 4px 10px purple; border-radius: 8px; black; padding: 10px; text-align:center; background-color: rgb(218, 201, 50);'>" +

    "<h2>Total marks </h2>" +

    "</td >" +

    "<td style='box-shadow: 4px 4px 10px purple; border-radius: 8px; black;;padding: 10px; text-align:center; background-color: rgb(218, 201, 50);'>" +

    "<h2>Obtain marks</h2>" +

    "</td>" +

    "<td style='box-shadow: 4px 4px 10px purple; border-radius: 8px; black;;padding: 10px; text-align:center; background-color: rgb(218, 201, 50);'>" +

    "<h2>percentage</h2>" +

    "</td>" +


    "<td style='box-shadow: 4px 4px 10px purple; border-radius: 8px; black; padding: 10px; text-align:center; background-color: rgb(218, 201, 50);'>" +

    "<h2>Grade</h2>" +

    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>Math</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + oneSubTotal + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + math + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + percent.toFixed(2) + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + getGrade(math) + "</h4>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>Science</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + oneSubTotal + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + sci + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + percent1.toFixed(2) + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + getGrade(sci) + "</h4>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>Biology</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + oneSubTotal + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + bio + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + percent2.toFixed(2) + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + getGrade(bio) + "</h4>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>Chemistry</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + oneSubTotal + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + chem + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + percent3.toFixed(2) + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + getGrade(chem) + "</h4>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>English</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + oneSubTotal + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + eng + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + percent4.toFixed(2) + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px;'>" +
    "<h4>" + getGrade(eng) + "</h4>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px; background-color: rgb(202, 131, 49);'>" +
    "<h4>SubTotal</h4>" +
    "</td>" +
    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px; background-color: rgb(202, 131, 49);'>" +
    "<h4>600</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px; background-color: rgb(202, 131, 49);'>" +
    "<h4>" + sumNum + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px; background-color: rgb(202, 131, 49);'>" +
    "<h4>" + per + "</h4>" +
    "</td>" +

    "<td style='padding: 10px; text-align:center; box-shadow: 4px 4px 10px purple; border-radius: 8px; background-color: rgb(202, 131, 49);'>" +
    "<h4>" + getGrade(per.toFixed(2)) + "</h4>" +
    "</td>" +

    "</tr>" +

    "</table>")