function fIntro() {
    $("#theme")[0].volume = 0.5;
    $("#theme")[0].play();
}

function fIntro2() {
    $("#theme2")[0].play();
}

function showArena() {
    $("#arena:hidden:first").fadeIn(2000);
}

function hoversound() {
    $("#hoversound")[0].volume = 0.6;
    $("#hoversound")[0].play();
}

function fDraw() {
    $("#saberdraw")[0].play();
}

function fBuzz() {
    $("#saberbuzz")[0].play();
}

function sBuzz() {
    $("#sabersbuzz")[0].play();
}

function fContact() {
    $("#sabercontact")[0].play();
}

function fSheath() {
    $("#sabersheath")[0].play();
}

function resetSound() {
    $("#saberbuzz")[0].pause();
    $("#sabersbuzz")[0].pause();
    $("#saberbuzz")[0].currentTime = 0;
    $("#sabersbuzz")[0].currentTime = 0;
}

function reload(){
    location.reload();
}
// makes player move with arrow keys
$(document).keyup(function(e) {
    switch (e.which) {
        case 37:
            $(".obiwan").animate({ left: "-=50px" }, "normal");
    }
});
$(document).keyup(function(e) {
    switch (e.which) {
        case 38:
            $(".obiwan").animate({ top: "-=50px" }, "normal");
    }
});

$(document).keyup(function(e) {
    switch (e.which) {
        case 39:
            $(".obiwan").animate({ left: "+=50px" }, "normal");
    }
});

$(document).keyup(function(e) {
    switch (e.which) {
        case 40:
            $(".obiwan").animate({ top: "+=50px" }, "normal");

    }
});

document.onkeyup = function(event) {
    var userKey = event.key;
    if (userKey === "d") {
        fDraw();
        setTimeout(fBuzz, 1000);
        setTimeout(sBuzz, 2000);
    }
    if (userKey === "s") {
        fContact();
    }
    if (userKey === "w") {
        fSheath();
    }
    if (userKey === "w") {
        setTimeout(fSheath, 500);
        resetSound();
    }
};

function attackaction(event) {
    currentdefender.hP = currentdefender.hP - attacker.aP;
    
    attacker.hP = attacker.hP - currentdefender.cAP;
    $('.' + attacker.class).html(attacker.hP + " hP");
    $('.' + currentdefender.class).html(currentdefender.hP + " hP");
    console.log("attacker health is now : " + attacker.hP);
    console.log("currentdefender health is now: " + currentdefender.hP);
    $("#gamewindow").html("You attacked " + currentdefender.name + "for " + attacker.aP + " damage!!" + "<br>");
    $("#gamewindow").append(currentdefender.name + "attacked you for " + currentdefender.cAP + " damage!!" + "<br>");
    $("#gamewindow").append("Your hP is now: " + attacker.hP + "<br>");
    $("#gamewindow").append(currentdefender.name + "'s hP is now: " + currentdefender.hP);
    attacker.aP = attacker.aP + attackerfixedattack;
    if (currentdefender.hP <= 0) {
        $("#defenderbox").append("You have defeated your opponent!!! Choose your next opponent");
        checkpoint3 = false;
        checkpoint2 = false;
        checkpoint4 = false;

    }
    if (attacker.hP <= 0) {
        $("#defenderbox").append("You have been defeated!!!");
        checkpoint3 = false;
        checkpoint2 = false;
    }
}
