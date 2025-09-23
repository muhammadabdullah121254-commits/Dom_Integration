function getObj(event) 
{
//   document.getElementById("goods").value;
//   document.getElementById("name").value;
event.preventDefault();
  var goods = document.getElementById("goods").value;
  var name = document.getElementById("name1").value;
  var ans = "";
if (goods == "bottle" && name == "Abdullah") { 
    ans = `${goods} is sold out to ${name}`;
} else if (goods == "remote" || name == "hassan1") {
    ans = "yes, or operator is working";
} else if (goods != "glass" && name == "hassan") {
    ans = "not operator working"
}
 else {
     ans = `check your name: ${name}`;
    }
    document.getElementById("result").innerHTML = ans;
}