

//Creating Object Oriented. new user 
var User = function(name, number){
    this.name = name;
    this.number = number;
};

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

    //change to another page that u enter the code in
};


//Get code function
var getCode = function(user){

        var params = user.number;
    // var params = JSON.stringify(user.number);
        console.log("yo");
        console.log(params);

    var body = {
        phone: params
    };
    console.log(body);

    var sendBody = JSON.stringify(body);
    console.log(sendBody);
    

    var request = new XMLHttpRequest();
        
        request.open('POST', 'https://api.homeppl.com/console/login/get-code', false);
        request.setRequestHeader("Content-type", "application/json");

        request.onreadystatechange = function(){
            console.log("hey");

            if(request.readyState == 4 && request.status == 200){
                console.log(request.responseText);   
            }
        }
        request.send(sendBody);

        console.log(request.status);       
        console.log(request.statusText);
};


