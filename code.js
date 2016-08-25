//access button, gets code value and invoke api function
var access = function(){
        
    var userCode = document.getElementById('code').value;
    var form = document.getElementById('enterCode');

    userCode.toLowerCase();  //transform all input to lower case
    form.reset();  //reset page after clicking button
    getToken(userCode);  //invoke api fnc, pass in received code 
}; 


// api function, pass in the code as an object(string)
// receive session token. use local storage
// while waiting for response disabale input field,
// when get resonse redirect to dashboard page

var getToken = function(userCode){

    var createObject = {
        code: userCode
    };

    var passCode = JSON.stringify(createObject);
        console.log("showing code as a string " + passCode);

    var xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://api.homeppl.com/console/login', false);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function(userCode){ 
              console.log("im in on ready state change");

              userCode.disable = true;
             //disable input field

            if(xhr.status == 200){ 
                var responseBody = JSON.parse(xhr.responseText);
                // redirect to dashboard page
                if (responseBody.status === 'OK') {
                        console.log("success");
                        console.log(responseBody.data);
                    redirect(responseBody);
                }
                                     
           } else {
                console.log(xhr.status);       
                console.log(xhr.statusText); 
           }
       }; 
        xhr.send(passCode);
};


// redirect to dashboard  file
var redirect =  function(responseBody){
    console.log("hey in im redirect");
    console.log(window.location);
    
    document.location.href="/dashboard.html";
};


//NOTES
//User enters acess code that is sent to Api as an object in the body.After clicks access:
    // wile waiting for response from server, the input field is disabaled
    // once get a response from the server, user is automaticaly transffered to dashboard


