document.getElementById('b').onclick = function() {
    var d = new Date();
    var dd = document.getElementById("op1").value;
    var mm=document.getElementById("op2").value;
    var yy=document.getElementById("op3").value;
    var date1 = new Date(yy, mm-1, dd,  0, 0); 
var date2 = new Date(); // 5:00 PM

    if (((date2.getTime()-date1.getTime())/(1000*60*60*24*365))>13)
    alert('You may proceed.');
    else
    alert('Under Aged');
};