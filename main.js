var validationForm = function(){

    var name = document.getElementById("userName").value;
    var number = document.getElementById("userNumber").value;

    name = name.toLowerCase();

    console.log(name + " " +number);

};

var request = new XMLHttpRequest();