let error = document.getElementById("error");
let msg = document.getElementById("msg");

function Check(inputtext) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  if (inputtext.value.match(mailformat)) {
    console.log("ok");
    document.form.email.focus();
    error.classList.add("display-none");
    msg.classList.add("display-none");
  } else {
    console.log("not ok");
    document.form.email.focus();
    error.classList.remove("display-none");
    msg.classList.remove("display-none");
  }
}
