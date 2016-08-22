

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
    console.log(user);        
    console.log(user.name);
    console.log(user.number);

    //get the code by invking another function- http req fnc
    getCode(user);

    //change to another page that u enter the code in
};


//Get code function
var getCode = function(user){

    var request = new XMLHttpRequest();
    var params = user.number;

        request.open('POST', 'https://api.homeppl.com/console/login/get-code', false);
        request.onreadystatechange = function(){
            console.log("hey");

            if(request.readyState == 4 && request.status == 200){
                console.log(request.responseText);   
            }
        }
        request.send("0532344568");

        // request.responseBody
        // request body

        console.log(request.status);
        console.log(request.data);
        console.log(request.msg);        
        console.log(request.statusText);
};


