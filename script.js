let string = ""
let isCal = false
let isOpt = false
let isDot = false;

const buttons = document.querySelectorAll('.buttons')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
       if(e.target.id == 'red' && isOpt == false){
           if(string.length<22){
           string += e.target.innerHTML
           }
           isOpt = true
           isCal = false
       }
       else if(e.target.id == 'black'){
           if(isCal == true){
            string = ""
           }

           if(string.length<22){
            if(e.target.innerHTML != '.' || isDot == false){
               string += e.target.innerHTML
               if(e.target.innerHTML == '.') isDot = true
            }
           }
           isOpt = false
           isCal = false
       }
       else if(e.target.innerHTML == 'X'){
           string = string.slice(0,-1)
           isOpt = false
       }
       else{
           if(e.target.innerHTML == 'AC'){
                string = ""
                isCal = false
                isOpt = false
                isDot = false
            }
           if(e.target.innerHTML == '=' && isCal == false){
                string  = eval(string)
                isCal = true
                isOpt = false
                isDot = false
            }
       }
        document.querySelector('#input').innerHTML = string
    })
})
