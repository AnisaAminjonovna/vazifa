function myFunc(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}

function myFunc2(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = "yellow"
}


// function myFunc3(){
//     document.body.style.backgroundColor = "yellow"
// }


// function myFunc4(){
//     document.body.style.backgroundColor = "orange"
// }


// function myFunc5(){
//     document.body.style.backgroundColor = "purple"
// }
let size = 16
function fontSize(){
    
    size = size + 2
    document.body.style.fontSize = size + "px"
}

let size1 = 16
function fontSize1(){
    
    size = size - 2
    document.body.style.fontSize = size + "px"
}

function fontSize2(){
    
    
    document.body.style.fontSize = "25px"
}


function fontSize3(){
    
    
    document.body.style.fontSize = "12px"
}
function fontSize3(){
    
    
    document.body.style.fontSize = "16px"
}
function colorFunc(){
    let color = prompt("rangni kriting")
    document.body.style = `background-color: ${color}`
}



let mode = false
function darkFunc(){
    if (mode == false) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }

    mode = !mode
}



function textSize() {
    let textSize1 = prompt("Shrift hajmini kriting")
    document.body.style.fontSize = textSize1 + "px"
}