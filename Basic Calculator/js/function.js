function ac(){
    document.getElementById("result").value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
function insert(number) {
    result.value+= number;
}      
function equal(){
    var equal= document.getElementById("result").value;
    var b = eval(equal);
    document.getElementById("result").value=b; 
}




       