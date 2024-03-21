let HcountEl = document.getElementById("home-count")
let GcountEl = document.getElementById("guest-count")
let Hcount = 0
let Gcount = 0

HcountEl.textContent = Hcount
GcountEl.textContent = Gcount

function one(){
Hcount += 1

HcountEl.textContent = Hcount
}
function two(){
Hcount += 2

HcountEl.textContent = Hcount
}
function three(){
Hcount += 3

HcountEl.textContent = Hcount
}
function gOne(){
Gcount += 1
GcountEl.textContent = Gcount
}
function gTwo(){
Gcount += 2
GcountEl.textContent = Gcount

}
function gThree(){
Gcount += 3
GcountEl.textContent = Gcount
}

function reset(){
Hcount= 0
Gcount = 0

HcountEl.textContent = Hcount
GcountEl.textContent = Gcount
}