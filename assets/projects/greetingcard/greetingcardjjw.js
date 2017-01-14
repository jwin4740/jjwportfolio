
function gettoname(){


var toname = prompt("Who is this for? ");

document.getElementById("to").innerHTML = toname;

}

function getmessage(){


var message = prompt("What is your message? ");

document.getElementById("message").innerHTML = message;

}

function getfromname(){


var fromname = prompt("Who is this from? ");

document.getElementById("from").innerHTML = fromname;

}


function printPage() {
    window.print();
};

function sent() {
	alert("Your card has been sent! Merry Christmas!!");
}