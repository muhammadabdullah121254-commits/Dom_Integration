function getPerc()
{
    let name =  prompt("Enter your name")   
    // add total marks of std in this variable
    let totalMarks_of_std = document.getElementById("tm1").value
    alert(totalMarks_of_std)
    // add obtained marks of std in this variable
    let obtainedMarks_of_std = document.getElementById("obt1").value
    alert(obtainedMarks_of_std)

    let percentage = (obtainedMarks_of_std/totalMarks_of_std )* 100

    alert(name + "your percentage is" + percentage + "%")

    document.writeln(name + "your percentage is " + percentage + "%")

    console.log(name + "your percentage is " + percentage + "%")



}
  var goods = prompt("Enter the name of the goods:");
    var name = prompt("Enter your name");
    if (goods === "bottle" && name === "Abdullah") {
        console.log(`${goods} is sold out to ${name}`)
    }
    else if (goods === "remote" || name == "hassan") {
        console.log("yes or operator is working")
    }
        else if (goods !== "glass" && name == "hassan1") {
        alert("not operator is working")
    }
    else {
        console.log(`check your ${name} name` )
    } 