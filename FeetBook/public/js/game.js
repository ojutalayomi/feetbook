const level= [
  {
    level: 1,
    tries: 10,
    min: 0,
    max: 20
  },
  {
    level: 2,
    tries: 10,
    min: 0,
    max: 50 
  },
  {
    level: 3,
    tries: 10,
    min: 0,
    max: 100
  },
  {
    level: 4,
    tries: 5,
    min: 0,
    max: 100
  },
  {
    level: 5,
    tries: 3,
    min: 0,
    max: 6
  }
]
$("#sound3")[0].volume = 0.1;

  var l;
  l = 0;
  var random_Number;

function failedLvl() {
  l = 0;
  console.log(`Random Number: ` +random_Number);
  console.log(`level: `+ (l + 1));
  console.log(`Minimum No: `+ level[l].min);
  console.log(`Maximum No: `+ level[l].max);
  $("#triess").val(level[l].tries);
  $("#levels").val(level[l].level);
  $("#max").html(level[l].max);
}

function prevLvl_() {
  if(l != 0){
    l -= 1;
  }
  console.log(`Random Number: ` +random_Number);
  console.log(`level: `+ (l + 1));
  console.log(`Minimum No: `+ level[l].min);
  console.log(`Maximum No: `+ level[l].max);
  $("#input").val("");
  $("#firstout").html("");
  $("#secondout").html("");
  $("#input").prop("disabled", false);
  $("#submit").prop("disabled", false);
  $("#myPopup").removeClass("show");
  $("#sound3")[0].play();
  $("#triess").val(level[l].tries);
  $("#levels").val(level[l].level);
  $("#max").html(level[l].max);
}


$(document).ready(function() {

var img = document.querySelector("#uploadBtn");
   $("#user-Img").on("change", function (event) {
      //var image = document.getElementById('output');
      $('#userImg').attr('src', URL.createObjectURL(event.target.files[0]));
      $(".userPage").css("background-image",`url(${URL.createObjectURL(event.target.files[0])})`);
      console.log("Uploaded")
    });    

// loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
                $('#rules').toggleClass('show');
            }
        }, 3000);
    };
    loader();

    $("#start_game").on("click",function(){
      if($("#username").val() !== ""){
        $("#rules").css("display","none");
      }
      let text;
      let user = $("#username").val();
      if (user == null || user == "") {
        text = "User cancelled the prompt.";
      } else {
        text = "Hello " + user + " ! How are you today?";
        $("#sound3")[0].play();
      }
      $(".userName").html(text);
    });

    $("#pg1-button").on("click",function(){
      $("#pg1-button").css("display","none");
      $("#pg2-button").css("display","block");
      $("#pg1").css("display","block");
      $("#pg2").css("display","none");
      console.log("Rules")
    })
    $("#pg2-button").on("click",function(){
      $("#pg2-button").css("display","none");
      $("#pg1-button").css("display","block");
      $("#pg2").css("display","flex");
      $("#pg1").css("display","none");
      console.log("Cont")
    })

    $("#uploadBtn").on("click", function () {
      $("#user-Img").click();
      console.log("Upload")
    })

    $(document).on("dragover", ".userPage", function(event) {
      event.preventDefault();
    });
  
    $(document).on("drop", ".userPage", function(event) {
      event.preventDefault();
      var fileInput = $("#user-Img")[0];
      var files = event.originalEvent.dataTransfer.files;
  
      if (files.length > 0) {
        var file = files[0];
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var userPage = $(".userPage");
          var uploadBtn = $("#uploadBtn");
          var uploadTxt = $("#uploadTxt");
  
          // Display the image in the userPage div
          //userPage.html(`<img src="${e.target.result}" width="200px" height="200px" id="userImg" alt="User Image">`);
          fileInput = files;
          $('#userImg').attr('src', e.target.result);
          $(".userPage").css("background-image",`url(${e.target.result})`);

          // Hide the Upload Button text
          uploadTxt.hide();
  
          // Show the file name as the text on the Upload Button
          //uploadBtn.html(file.name);
  
          // Display the file input (hidden by default)
          //fileInput.style.display = "block";
        };
  
        reader.readAsDataURL(file);
      }
    });

    
// Your getRandomInt function remains the same
 /* function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }*/

  function getRandomInt_() {
    l += 1;
    random_Number = Math.floor(Math.random() * level[l].max) + level[l].min;
    console.log(`Random Number: ` +random_Number);
    console.log(`level: `+ (l + 1));
    console.log(`Minimum No: `+ level[l].min);
    console.log(`Maximum No: `+ level[l].max);
    $("#triess").val(level[l].tries);
    $("#levels").val(level[l].level);
    $("#max").html(level[l].max);
  }

  function getRandomInt() {
    random_Number = Math.floor(Math.random() * level[l].max) + level[l].min;
    console.log(`Random Number: ` +random_Number);
    console.log(`level: `+ (l + 1));
    console.log(`Minimum No: `+ level[l].min);
    console.log(`Maximum No: `+ level[l].max);
  } getRandomInt();



 // var inputValue = $("#input").val();
  //var triesvalue = $("#triess").val();
 
  $("#triess").val(level[l].tries);
  $("#levels").val(level[l].level);
  $("#min").html(level[l].min);
  $("#max").html(level[l].max);
  setInterval(() => {
    $(".tries").html($("#triess").val());
    $("#level b").html($("#levels").val());
  }, 1000);

  setInterval(() =>{
    if ($("#triess").val() <= 0) {
      $("#triess").val(0);
    }
  }, 100);
  

  
  /////////////////////////////////
  //////// Submit Button //////////
  ////////////////////////////////
  $("#submit").on("click", function() {
    var input = $("#input");
    var triesss = $("#triess");
    $("#sound")[0].play();

    //Out of tries?
    if($("#triess").val() == 1){
      $("#triess").val(0);
      $("#sound3")[0].pause();
      $("#input").prop("disabled", true);
      $("#submit").prop("disabled", true);
      $("#myPopup").toggleClass("show");
      if(l != 0){
      $("#myPopup").html(`
      <p>There are no more tries left.
      Would you like to continue from the previous <b onclick="prevLvl_()" id="prevLvl">Level</b>
      or
      <b onclick="start_()" id="start">Start from level 1?</b></p>
      `);
      }else{
        $("#myPopup").html(`
        <p>There are no more tries left.
        Would you like to <b onclick="start_()" id="start">Start from level 1?</b></p>
        `);
      }
    } else{
      $("#submit").prop("disabled", false);
    }

    
      var randomNumber = random_Number;
      var resultNum = input.val();

        if (input.val() !== "" && input.val().length <= $("#max").html().length) {
          console.log(`Random Number: ` +randomNumber);
          $("#firstout").html(resultNum);
          setTimeout(function () {
            if ($("#firstout").html() == resultNum) {
                $("#firstout").html("");
            }
          }, 3000);
          $("#clickCount").val(function(i, oldValue) {
            return parseInt(oldValue, 10) + 1;
          });
          $("#triess").val(function(i, oldValue) {
            return parseInt(oldValue, 10) - 1;
          });

        }
    
      if(level[l].level < level.length){

        if (input.val() != randomNumber) {
          console.log("Please try again");
          $("#firstout").css("color", "red");
          $("#secondout").css("color", "black");

        } else {

            getRandomInt_()
  
            // sound
            $("#sound1")[0].play();
            $("#sound1")[0].volume = 0.5;
  
            //success msg
            $("#myPopup").toggleClass("show");
                if(l < level.length){
                  $("#myPopup").html(`
                  <p>You have successfully guessed the correct number.
                  You are now promoted to the next level.<b onclick="next_()" id="next">Continue</b></p>
                  `);
                } else {
                  $("#myPopup").html(`
                  <p>You have successfully guessed the correct number.
                  You have come to the end of the game. <b onclick="start_()" id="start">Start from level 1?</b></p>
                  `);
                }
  
                //number display
                $("#secondout").html(randomNumber)
                setTimeout(function () {
                  if ($("#secondout").html() == randomNumber) {
                      $("#secondout").html("");
                  }
                }, 3000);
                console.log("You guessed the correct number");
                $("#firstout").css("color", "green");
                $("#secondout").css("color", "green");
  
                //setTimeout(function() {
                  $("#sound1")[0].pause();
                  $("#sound1")[0].currentTime = 0;
                //}, 2000);
        }
      } else {
        $("#input").prop("disabled", true);
        $("#submit").prop("disabled", true);
        $("#myPopup").toggleClass("show");
        $("#myPopup").html(`
                  <p>You have successfully guessed the correct number.
                  This is the end of the game. <b onclick="start_()" id="start">Start from level 1?</b></p>
                  `);
      }
  });

    

  // 
  $("form").submit(function(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action (form submission)

      // Trigger the click event on the button
      $("#submit").click();
    }
  });

  $(document).on("keydown", function(e) {
    //console.log("Keydown event:", e.key);

    //
    if (e.key === "s") {
      e.preventDefault();
      $("#start").click();
    }
    if (e.key === "n" || e.key === "ArrowRight" || e.key === "c") {
      e.preventDefault();
      $("#next").click();
      $("#pg2-button").click();
    }
    if (e.key === "p" || e.key === "ArrowLeft") {
      e.preventDefault();
      $("#prevLvl_").click();
      $("#pg1-button").click();
    }
  });

  $(window).on("touchstart touchend", function(event) {
    //$("#sound3")[0].play();
    });

  
});

  
//Start new game
    var start = document.querySelector("#start");
    var next = document.querySelector("#next");

      function start_() {
        failedLvl();
        $("#triess").val(level[l].tries);
        $("#input").val("");
        $("#firstout").html("");
        $("#secondout").html("");
        $("#input").prop("disabled", false);
        $("#submit").prop("disabled", false);
        $("#myPopup").removeClass("show");
        $("#sound3")[0].play();
        
    console.log('Works');
      };

      function next_() {
        $("#input").val("");
        $("#firstout").html("");
        $("#secondout").html("");
        $("#myPopup").removeClass("show");
      };