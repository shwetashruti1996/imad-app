//couner code
var button=document.getElementById('counter');
var counter=0;
button.onclick= function() {
    //make request to the counter endpoint
    
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};