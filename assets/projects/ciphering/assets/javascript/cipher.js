 $(document).ready(function() {
     var key = "";
     var messagi = "";
     var decoded = "";
     var krot = "";
     var messagiv = "";
     var decodedv = "";
     var krotnum = [];
     var variable = "";
     var krotUpNum = "";
     var krotLowNum = "";
     var krotElse = "";



 

     $("#getmessage").on("click", function() {
         key = parseFloat($("#caesarkey").val());
         messagi = $("#message").val();

         console.log(messagi);

         for (var i = 0, n = messagi.length; i < n; i++) {
             console.log(messagi[i]);
             console.log(messagi.charCodeAt(i));
             if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));
             } else if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + key) % 26 + 97)));
             } else {
                 decoded += messagi[i];
             }
         }
         console.log(messagi);
         $("#printmessage").append(decoded);



     });

     //----------------vigenere-----------------------

     $("#getmessagev").on("click", function() {
         krot = ($("#vigenerekey").val());
         messagi = $("#messagev").val();

         console.log(messagi);
         // fill krotnum array
         for (var i = 0, p = krot.length; i < p; i++) {
             krotnum.push(krot.charCodeAt(i));
             console.log("modulo krot: " + krotnum[i]);
         }
         console.log(krotnum);
         for (var i = 0, n = messagi.length, m = krot.length; i < n; i++) {
             if (krotnum[i % m] > 96 && krotnum[i % m] < 123) {
                 krotLowNum = krotnum[i % m] - 97;
                 console.log("if else cond: " + krotLowNum);
             }

             if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {

                 decodedv += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + krotLowNum) % 26 + 97)));
                 console.log("lowercase " + krotnum[i]);
             } else {

                 decodedv += messagi[i];

             }
         }
         console.log(krotnum);
         console.log(decodedv);
         $("#printmessagev").append(" " + decodedv);



     });
     //-------------------------
     $("#reset").on("click", function reset() {
         key = "";
         messagi = "";
         decoded = "";
         krot = "";
         messagiv = "";
         decodedv = "";
         krotnum = [];
         variable = "";
         krotUpNum = "";
         krotLowNum = "";
         krotElse = "";
         $("#caesarkey").val("");
         $("#vigenerekey").val("");

         $("#message").val("");
         $("#printnumber3").html("Result: ");

         $("#messagev").val("");
         $("#printmessagev").html("Result: ");
     });
 });
