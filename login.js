const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D",
 "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", 
 "R","S", "T", "U", "V", "W", "X", "Y", "Z"];

const submit = document.querySelector(".submit");
let username = document.querySelector(".username");
let userpassword = document.querySelector(".password");

let password = "";
for (i = 0; i < 5; i++) {
    password += all[getPassword()];
}

setTimeout(()=>{


alert(`your password is ${password}`);
},3000);


submit.addEventListener("click", () => {
    if (userpassword.value != password || username.value == ""){
        alert("incorrect password or input a user name");
    }


    else {
        window.open("simple.html");
    }
})

function getPassword() {
    return Math.floor(Math.random() * all.length);
}