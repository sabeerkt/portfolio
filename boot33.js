function sendMail(){
  var params = {
            name:document.getElementById("name"),value ,
            email:document.getElementById("email"),value ,
            messages:document.getElementById("message"),value ,
        };
    
    const serviceID = "service_ezptonr";
    const templateID = "template_d39hoig";
    
    email.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").valu ="";
            document.getElementById("email").valu ="";
            document.getElementById("message").valu ="";
             console.log(res);
             alert("your message sent");
        }
    )
    .catch((err)=>console.log(err));
    }