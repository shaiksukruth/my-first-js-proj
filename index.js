var display = document.getElementById("display");
var flag=0;
for(var i=0;i<document.querySelectorAll(".button").length;i++){
  document.querySelectorAll(".button")[i].addEventListener("click",function(){
    var x=this.innerHTML;
    // document.getElementById('display').innerHTML=x;
    if(display.innerText==="Error"){
      display.innerText='';
    }
    if(flag===1){
      display.innerText='';
      flag=0;
    }
    switch(x){
      case 'C':
        display.innerText='';
        break;
      case '←':
        if (display.innerText){
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
          flag=1;

        }
        catch {
          display.innerText = "Error";
        }
        break;


      default:
        display.innerText+=this.innerText;
    }

    // if(x!=="="){
    //   display.innerHTML += this.innerHTML;
    // }


    // display.innerText += e.target.innerText;
    // if(x==="="){
    //   alert("u clicked equal")
    // }

  });
}







// let display = document.getElementById('display');
// let buttons = Array.from(document.getElementsByClassName('button'));
// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
