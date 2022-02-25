let userButton = document.querySelector("submit");


userButton.onclick = function(event) {
    event.preventDefault();

    let userIdTag = document.getElementById("username");
    let username = userIdTag.value.trim();
    //console.log(username)

    if(username === "") {
        console.log("A Username is Required");
    } else {
        console.log(username)
    }
}