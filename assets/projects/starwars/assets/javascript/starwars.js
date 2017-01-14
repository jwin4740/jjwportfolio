//global variables
var cArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var checkpoint1 = false;
var checkpoint2 = false;
var checkpoint3 = false;
var tempval;
var clicksoundinitial = true;
var clicksounddefender = true;
var attackerfixedattack;
var checkpoint4 = true;


$(document).ready(function() {

    // prototype object
    function Character(name, hP, aP, cAP, id, num, imagesource, hpclass) {
        this.name = name;
        this.hP = hP;
        this.aP = aP;
        this.cAP = cAP;
        this.ele = '<div ' + id + 'class="player hovers" data-value="' + num + '"><h4>' + this.name + '</h4><img class="pimage" src="assets/images/' + imagesource + '<h4 class=' + hpclass + '>' + this.hP + '  hP</div>';
        this.class = hpclass;
    };

    // make Character objects for each player
    var charOne = new Character("ObiwanKenobi", 220, 15, 19, 'id="obi" ', 1, 'obiwan.jpg">', 'obiclass');
    var charTwo = new Character("QuigonGinn", 225, 14, 20, 'id="qui" ', 2, 'quigon.jpeg">', 'quiclass');
    var charThree = new Character("CountDooku", 250, 16, 21, 'id="count" ', 3, 'countdooku.jpg">', 'countclass');
    var charFour = new Character("DarthMaul", 210, 18, 23, 'id="darth" ', 4, 'darthmaul.jpeg">', 'darthclass');

    //fill character array
    cArray.push(charOne);
    cArray.push(charTwo);
    cArray.push(charThree);
    cArray.push(charFour);
    console.log(cArray);




    // user chooses their player which appends to the attacker box, while the remaining players get appended
    // to the defenderondeck box

    fIntro();

    function setup() {
        $("#choosebox").append(charOne.ele).append(charTwo.ele).append(charThree.ele).append(charFour.ele);
    }
    setup();

    // play click sound on hover
    $('.player').on("mouseover", function() {
        if ($(this).hasClass("attacker"))
        {
            return;
        }


        if ($(this).hasClass("currentdefender"))
        {
            return;
        }

        if ($(this).hasClass("defender") && clicksoundinitial)
        {
            hoversound();
        }

        if(clicksoundinitial)
        {
            hoversound();
        }

    });

    // onclick move your selection to the attacker box and append the rest to the ondeck box
    $('.player').on("click", function() {
        if (!checkpoint1) {
            $(this).siblings().addClass("defender").appendTo("#defenderondeckbox");
            $(this).addClass("attacker").removeClass("hovers").appendTo("#attackerbox");
            tempval = $(this).attr("data-value");
            attacker = cArray[tempval - 1];
            console.log(attacker);
            checkpoint1 = true;

        }
    });

// choose your current defender
    $("#defenderondeckbox").on("click", ".player.defender", function() {
        if (!checkpoint2) {
            
            $("#defenderbox").html(this);
            $(this).removeClass("hovers").addClass("currentdefender");
            tempval = $(this).attr("data-value");
            currentdefender = cArray[tempval - 1];
            currentdefender.hP = cArray[tempval - 1].hP;
            console.log(currentdefender.hP);
            console.log(currentdefender);
            checkpoint2 = true;
            $("#defenderbox").append();
            checkpoint3 = true;
            
        }
        if (checkpoint4)
        {
            attackerfixedattack = attacker.aP;
            console.log(attackerfixedattack);
        }
        checkpoint4 = false;
    });
// press the s key to attack your opponent
    $(document).on("keypress", function() {
        if (checkpoint3) {
            if (event.key === "s") {
                setTimeout(attackaction, 3000);
            }
        }

    });
    // --------------------------------------------------
    // click the play again button to replay
    $("#replay").on("click", reload);

    
    // sound effects
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
});
