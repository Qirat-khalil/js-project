let math = +prompt("enter math number");
let sci = +prompt("enter sci number");
let bio = +prompt("enter bio number");
let chem = +prompt("enter chem number");
let eng = +prompt("enter eng number");

let totalMark = 500;
let oneSubTotal =120

let sumNum = math + sci + bio + chem + eng;
// document.write(sumNum, "total number")

let per = (sumNum/totalMark)*100
let percent = (math/oneSubTotal)*100
let percent1 = (sci/oneSubTotal)*100
let percent2 = (bio/oneSubTotal)*100
let percent3 = (chem/oneSubTotal)*100
let percent4 = (eng/oneSubTotal)*100
// document.write(per,"perce")

// if (per >= 80){
//     document.write(" A+ garde")
//  }else if (per >= 70){
//      document.write(" A garde")
//   }else if (per >= 60){
//      document.write(" B garde")
//   }else if (per >= 50){
//      document.write(" C garde")
//   }else{
//      document.write(" fail")
//   }


function getGrade(marks) {
    if (marks >= 80) return "A+";
    else if (marks >= 70) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

let grade = getGrade(sumNum);


document.write("<table style='border: 4px solid purple; padding: 10px; margin:0 auto;'>"+
"<tr style='border: 1px solid black;'>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h2>Subject Name</h2>"+
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
        
        "<h2>Total marks </h2>"+

    "</td >"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
        
        "<h2>Obtain marks</h2>"+

    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
        
       "<h2>percentage</h2>"+

    "</td>"+


    "<td style='border: 1px solid black;padding: 10px;'>"+
        
         "<h2>Grade</h2>"+

    "</td>"+
"</tr>"+

"<tr>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h4>Math</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + oneSubTotal+"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + math +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + percent +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + getGrade(math) +"</h4>" +
    "</td>"+
"</tr>"+

"<tr>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h4>Science</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + oneSubTotal+"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + sci +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + percent1 +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + getGrade(sci) +"</h4>" +
    "</td>"+
"</tr>"+

"<tr>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h4>Biology</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + oneSubTotal+"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + bio +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + percent2 +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + getGrade(bio) +"</h4>" +
    "</td>"+
"</tr>"+

"<tr>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h4>Chemistry</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + oneSubTotal+"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + chem +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + percent3 +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + getGrade(chem) +"</h4>" +
    "</td>"+
"</tr>"+

"<tr>"+
    "<td style='border: 1px solid black;padding: 10px;'>"+
        "<h4>English</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + oneSubTotal+"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
       "<h4>" + eng +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + percent4 +"</h4>" +
    "</td>"+

    "<td style='border: 1px solid black;padding: 10px;'>"+
    "<h4>" + getGrade(eng) +"</h4>" +
    "</td>"+
"</tr>"+

"</table>")