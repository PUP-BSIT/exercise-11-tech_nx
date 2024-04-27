function Comments() {
 let lname = document.getElementById(lname);
 if(lname.value.length > 0) {
 document.getElementById("save_button").disabled=false;
 } else {
 document.getElementById("save_button").disabled=true;
 }

 let comment = document.getElementsById(comment)
 if (comment.value.length > 0) {
document.getElementById("save_button").disabled=false;
} else {
document.getElementById("save_button").disabled=true;
}
}