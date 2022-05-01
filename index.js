//document.getElementById('cout-el').innerText= 6


// var bonuspoints = 50

// let plus = bonuspoints +100
// console.log(plus)

// let decre = bonuspoints -25
// console.log(decre)

// let incre = bonuspoints +70
// console.log(incre)

// function increment(){
//     console.log("42")
// }

// increment()

// let lapscompleted = 0

// function incrementlap(){
//     lapscompleted = lapscompleted + 1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// console.log(lapscompleted)

let count = 0
let countel = document.getElementById("count-el")
let sav = document.getElementById("save-el") 

function incrementcount(){
    count += 1
    countel.innerText= count
    console.log(count)
}

function save(){
    let countstr = count + " - "
    sav.textContent += countstr
    countel.textContent = 0
    count  = 0 
    // let savd =document.getElementById("total-el").innerText= count
}

function Greet(){
    let gret = document.getElementById("greet-btn")
    alert("Koniichiwa!!! Username")

}


// let firstname = "Vignesh"
// let lastname = " P"
// let fullname= firstname + lastname

// console.log(fullname)

// function gretme(){
//     let logo = "Hi there, "+ fullname + "!"
//     console.log(logo)
// }


// gretme()



// let mypoint = 3 

// function add3points(){
//     mypoint += 3
// }
// function removepoint(){
//     mypoint -= 1
// }

// add3points()
// console.log(mypoint)
// removepoint()
// console.log(mypoint)


let purchase = document.getElementById("add-btn")
let cartitem = document.getElementById("cart-btn") 
let cart = 0

function add(){

 
}
