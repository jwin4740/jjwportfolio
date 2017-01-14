$(document).ready(function() {
    // global variables

    var cardArray = [];
    var chipCount = 500;
    var currentBet = 0;

    // global variables



    //methods object

    function deckObjMain() {
        this.cardArray = cardArray;
        this.cards = cards;
        this.buildDecks = buildDecks;
        this.deckShuffle = deckShuffle;
        this.displayCards = displayCards;
    }



    // card object
    function cards(value, suit, name, image) {

        this.value = value;
        this.suit = suit;
        this.name = name;
        this.image = image;

    }



    // fill array with x deck(s) of cards
    function buildDecks(x) {
        var counter = 0;
        var dealerSum = "";
        var playerSum = "";
        $("#chipCount").html(chipCount);
        $("#currentBet").html(currentBet);
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        this.face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.suits = ["clubs", "diamonds", "hearts", "spades"];


        for (var k = 0; k < x; k++) {
            for (var j = 0, m = this.values.length; j < m; j++) {
                for (var i = 0, n = this.suits.length; i < n; i++) {
                    counter++;
                    var modcounter = counter % 52;
                    if (modcounter === 0) {
                        modcounter = 52;
                    }

                    cardArray.push(new cards(this.values[j], this.suits[i], this.face[j] + " of " + this.suits[i], "<img class='snap' alt='cardimage' src='assets/images/card" + modcounter + ".png'>"));

                }
            }
        }
        deckShuffle();
        // displayCards(x);
        $("#deal").on("click", function dealing() {
            currentBet = parseFloat(prompt("What is your bet?"));
            $("#currentBet").html(currentBet);



            var res = getRandom(cardArray.length);
            console.log(cardArray[res]);
            dealerSum = cardArray[res].value;
            console.log("dealer total is: " + dealerSum);
            $("#dealerHand").append(cardArray[res].image);
            cardArray.splice(cardArray[res], 1);
            console.log("deck now has: " + cardArray.length);

            // dealer blank
            var res1 = getRandom(cardArray.length);
            console.log(cardArray[res1]);
            dealerSum += cardArray[res1].value;
            console.log("dealer total is: " + dealerSum);
            console.log("DEALER HAS: " + cardArray[res1].name);
            $("#dealerHand").append("<img class='snap' alt='cardimage' src='assets/images/backface.png'>");
            cardArray.splice(cardArray[res1], 1);
            console.log("dealer has: " + cardArray.length);
            $("#dealerSum").append(dealerSum);

            var res2 = getRandom(cardArray.length);
            console.log(cardArray[res2]);
            playerSum = cardArray[res2].value;
            $("#playerHand").append(cardArray[res2].image);
            cardArray.splice(cardArray[res2], 1);
            console.log("deck now has: " + cardArray.length);

            var res3 = getRandom(cardArray.length);
            console.log(cardArray[res3]);
            playerSum += cardArray[res3].value;
            $("#playerHand").append(cardArray[res3].image);
            cardArray.splice(cardArray[res3], 1);
            console.log("deck now has: " + cardArray.length);
            $("#playerSum").append(playerSum);



        });

        function hitPlayer() {

            var res3 = getRandom(cardArray.length);
            console.log(cardArray[res3]);
            playerSum += cardArray[res3].value;
            $("#playerHand").append(cardArray[res3].image);
            cardArray.splice(cardArray[res3], 1);
            console.log("deck now has: " + cardArray.length);
            $("#playerSum").html(playerSum);
            if (playerSum > 21) {
                finish();
            }
        }




        $("#hitplayer").on("click", hitPlayer);








        $("#double").on("click", function doubleDown() {
            var double = confirm("Do you want to double down?");
            if (double) {
                currentBet = currentBet * 2;
                hitPlayer();
            }
        });

        $("#hitdealer").on("click", function hitDealer() {
            do {
                if (dealerSum < 17) {
                    var res3 = getRandom(cardArray.length);
                    console.log(cardArray[res3]);
                    dealerSum += cardArray[res3].value;
                    $("#dealerHand").append(cardArray[res3].image);
                    cardArray.splice(cardArray[res3], 1);
                    console.log("deck now has: " + cardArray.length);
                    $("#dealerSum").html(dealerSum);
                }
            }
            while (dealerSum < 17);

            finish();



        });
        console.log(cardArray[0].value);


        $("#finish").on("click", finish);

        function finish() {

            if (playerSum > 21) {
                alert("you lose");
                chipCount -= currentBet;
                $("#chipCount").html(chipCount);
                $("#currentBet").html(0);
            }

            if (playerSum > dealerSum && playerSum < 22) {


                alert("You win");
                chipCount += currentBet;
                $("#chipCount").html(chipCount);
                $("#currentBet").html(0);

            }

            if (playerSum === dealerSum) {
                alert("push");
                $("#currentBet").html(0);
            }
            if (playerSum < dealerSum && dealerSum < 22) {
                alert("you lose");
                chipCount -= currentBet;
                $("#chipCount").html(chipCount);
                $("#currentBet").html(0);
            }

            if (dealerSum > 21) {
                alert("You win");
                chipCount += currentBet;
                $("#chipCount").html(chipCount);
                $("#currentBet").html(0);
            }
        };

        $("#reload").on("click", function() {
            $("#playerHand").html("");
            $("#playerSum").html("");
            $("#dealerHand").html("");
            $("#dealerSum").html("");
            playerSum = "";
            dealerSum = "";
            currentBet = 0;

        });

    }



    buildDecks(3);


    function hand() {

        var x = Math.floor(Math.random() * 52);
        var y = Math.floor(Math.random() * 52);
        $("#card").append(cardArray[x].image);
        $("#card").append(cardArray[y].image);
        $("#card").append("<br>");

        console.log(cardArray[x]);
        console.log(cardArray[y]);
    }

    function deckShuffle() {
        var i, j, k;
        var temp;

        // Shuffle the stack 'n' times.

        for (i = 0; i < 1; i++)
            for (j = 0; j < cardArray.length; j++) {
                k = Math.floor(Math.random() * cardArray.length);
                temp = cardArray[j];
                cardArray[j] = cardArray[k];
                cardArray[k] = temp;
            }
    }
    // shuffle();
    function getRandom(x) {
        var e = Math.floor(Math.random() * x)
        console.log(x);
        console.log(e);

        return e;

    }

    function displayCards(x) {
        for (var w = 0; w < x * 52; w++) {
            $("#card").append(cardArray[w].image);
        }
    }

    //    function audio() {
    //     $("#moneysound")[0].play()
    // }
    // audio();


    // function resetaudio() {
    //     $("#moneysound")[0].pause();
    //     $("#moneysound")[0].currentTime = 0;
    // }

});
