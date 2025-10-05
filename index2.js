function getPerc()
{
    let name =  prompt("Enter your name")   
    // add total marks of std in this variable
    let totalMarks_of_std = document.getElementById("tm1").value;
    alert(totalMarks_of_std)
    // add obtained marks of std in this variable
    let obtainedMarks_of_std = document.getElementById("obt1").value;
    alert(obtainedMarks_of_std)

    let percentage = (obtainedMarks_of_std/totalMarks_of_std )* 100

    alert(name + "your percentage is" + percentage + "%")

    document.getElementById("change").innerHTML=(name + "your percentage is " + percentage + "%")

    console.log(name + "your percentage is " + percentage + "%")



}
function getresult()
{
    getPerc()
}
    } 
