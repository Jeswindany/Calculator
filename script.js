let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calc(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        outputScreen.value = "Invalid!";
        setTimeout(clr, 3000);
    }
}

function clr(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}