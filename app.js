let slider = document.querySelector("#slider");
let length;
let DisplayLength = document.querySelector("#lengthDisplay");
let GenButton = document.querySelector("#button")
let passwordDisplay = document.querySelector(".password")
let copy = document.getElementById("copy")

// conditions
let uppercase = document.querySelector("#uppercase");
let number = document.querySelector("#numbers");
let symbols = document.querySelector("#special");

let UP;
let NU;
let SY;

document.querySelector("main").addEventListener("change", () => {
   UP = uppercase.checked ? true : false;
   NU = number.checked ? true : false;
   SY = symbols.checked ? true : false;


});

slider.addEventListener("change", () => {
  console.log(slider.value);
  length = slider.value;
  DisplayLength.innerText = "Length : " + length;
});

let password = "";

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let special = "!@#$%^&*()_<>?;=-+{}[]~";

let finalSet = lower;

function Generate() {
    if(NU) finalSet += numbers;
    if(UP) finalSet += upper;
    if(SY) finalSet += special;

    for(let i=0; i<length; i++){
        let finallength = finalSet.length;
        let Ri = Math.floor( Math.random()*(finallength - 0 + 1)  );

        password += finalSet[Ri];
    }
    
}


GenButton.addEventListener("click" , () => {
    password = ""
    Generate();
    passwordDisplay.innerText = password

})

copy.addEventListener("click" , () => {
    navigator.clipboard.writeText(password)
    .then(() => {
        alert("COPIED TO CLIPBOARD")
    })
})