

function send() {
    var params={
        name: document.getElementById('nameinput1').value,
        email: document.getElementById('nameinput2').value,
        message: document.getElementById('nameinput3').value
    }
    emailjs.send('service_ezptonr', 'template_d39hoig', params,'jNI4jD5g54Do38C-c')
    .then(function(response) {
        document.getElementById('nameinput1').value=""
        document.getElementById('nameinput2').value=""
        document.getElementById('nameinput3').value=""
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}




