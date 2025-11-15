const disp = document.getElementById("display");

 function addtodis(input) {
    disp.value += input;
    
 } 
 function cleard() {
    disp.value = "";
    
 }
function calc(){
    try {
        disp.value = eval(disp.value);
    } catch (error) {
        disp.value = "error";
    }
    
}