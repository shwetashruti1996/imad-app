//couner code
var button=document.getElementById('counter');

button.onclick= function() {
    //create the request object
    var request=new XMLHttpRequest();
    //capture the response and store it into a variable
   request.onreadystatechange = function(){
   if(request.readyState===XMLHttpRequest.DONE)   
   {
       //take some action
       if(request.Status==200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML=counter.toString();
       }
   
   }
   };
   request.open('GET','http://shwetashruti1996.imad.hasura-app.io/counter','true');
   request.send('null');
};