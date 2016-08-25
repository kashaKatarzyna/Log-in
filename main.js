

//Creating Object Oriented. new user 
var User = function(name, number){
    this.name = name;
    this.number = number;
};

//after user clicks submit button,
// take value of inputs
var validationForm = function(){

    var name = document.getElementById("userName").value;
    var number = document.getElementById("userNumber").value;
    var form = document.getElementById("login");

    name = name.toLowerCase();
    form.reset();

    //invoke new user function
    var user = new User(name, number);
    // console.log(user);        
    // console.log(user.name);
    // console.log(user.number);

    //get the code by invking another function- http req fnc
    getCode(user);
};


//Get access code function
var getCode = function(user){

    var params = user.number;
        console.log("show params " + params);

    var body = {
        phone: params
    };
        console.log("show body " + body + " " + body.phone);

    var sendBody = JSON.stringify(body);
        console.log("show sendBody " + sendBody);
    
//api request
    var request = new XMLHttpRequest();
        
        request.open('POST', 'https://api.homeppl.com/console/login/get-code', false);
        request.setRequestHeader("Content-type", "application/json");

        request.onload = function(){
            if(request.status == 200){
                console.log("success");
            } else {
                console.log(request.status);       
                console.log(request.statusText);
            }
        }
        request.send(sendBody);
};


// NOTES
// After user clicks Get Code:
//     user recieves a code  
//     user is directed to next page, so:
//         create page with input field that asks for users code and while waiting for response from server, input is disabaled 
//         aftr code is enetered, takes u to dashboard.

