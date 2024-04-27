function validation() {
    let name = document.getElementById("fname").value;
    let comment = document.getElementById("comment").value;

    if (name.trim().length > 0 && comment.trim().length > 0) {
        document.getElementById("com-b").disabled = false;
    } else {
        document.getElementById("com-b").disabled = true;
    }
}

document.getElementById("fname").addEventListener("input", validation);
document.getElementById("comment").addEventListener("input", validation);