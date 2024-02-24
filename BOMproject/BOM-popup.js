
const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
  alert("I am an alert box!");
}

function adConfirm() {
  let text;

  if (window.confirm('press a button!')) {

    text = "press ok button";

  } else{

    text = "press cancel button";

  }
  confirm.innerHTML = text;
}  


function promptBox() {

  let person = window.prompt('please enter your name', 'chameli');
  let name;
  if (person == null || person == " ") {
    text = "user cancel the prompt!";
  }
  else{
    text = "Hello" +' ' + person +"," +' '+ "How are you?";
  }
   prompt.innerHTML = text;
}
