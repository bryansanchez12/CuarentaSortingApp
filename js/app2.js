$(document).ready(function() {
  var constant = false;
  var isSelected;
  $(".repeat").change(function() {
    if ($(".repeat").val() == 2) {
      $(".day_form").css("display", "initial");
      $(".date_form").css("display", "none");
    } else if ($(".repeat").val() == 1) {
      $(".date_form").css("display", "none");
      $(".day_form").css("display", "none");
    } else {
      $(".day_form").css("display", "none");
      $(".date_form").css("display", "initial");
    }
  });

  $(".submition").click(function() {
    if ($(".repeat").val() == 2) {
      $(".day_form").css("display", "initial");
      $(".date_form").remove();
    } else if ($(".repeat").val() == 1) {
      $(".date_form").remove();
      $(".day_form").remove();
    } else {
      $(".day_form").remove();
      $(".date_form").css("display", "initial");
    }
  });

  $(".coffee").click(function() {
    if (constant != true) {
      this.innerHTML = "Confirm selection";
      $(this).addClass("pending");
      $(".schedule_form").css("display", "none");
      $(".coffee_back").css("display", "initial");
      $(".coffeeOptions").css("display", "flex");
      //   console.log($(this).hasClass("pending"));
      constant = true;
    } else {
      $(".coffee").html("Choose coffee type");
      $(".schedule_form").css("display", "initial");
      $(".coffee_back").css("display", "none");
      $(".coffeeOptions").css("display", "none");
      $(".extra").val();

      constant = false;
    }
  });

  $(".coffee_back, #program").click(function() {
    if (constant == false) {
    } else {
      $(".coffee").html("Choose beverage type");
      $(".schedule_form").css("display", "initial");
      $(".coffee_back").css("display", "none");
      $(".coffeeOptions").css("display", "none");
      console.log($(".coffee").hasClass("pending"));
      $(".coffee").removeClass("pending");
      $(".coffeeOptions div").removeClass("selected");
      $(".coffeeOptions div p").css("color", "rgb(33, 37, 41)");
      $(".extra").val("");
      constant = false;
    }
  });

  $("#now").click(function() {
    $(".coffeeOptions2 div").removeClass("selected");
    $(".coffeeOptions2 div p").css("color", "rgb(33, 37, 41)");
  });

  $(".coffeeOptions div").click(function() {
    $(".coffeeOptions div").removeClass("selected");
    $(".coffeeOptions div p").css("color", "rgb(33, 37, 41)");
    $(this).addClass("selected");
    $(this)
      .children("p")
      .css("color", "blue");
    $(".extra").val(
      $(this)
        .children("p")
        .html()
    );
  });

  $(".coffeeOptions2 div").click(function() {
    console.log($(".coffeeOptions2  div").hasClass("selected"));

    $(".coffeeOptions2 div").removeClass("selected");
    $(".coffeeOptions2 div p").css("color", "rgb(33, 37, 41)");
    $(this).addClass("selected");

    $(this)
      .children("p")
      .css("color", "blue");
    $(".extra2").val(
      $(this)
        .children("p")
        .html()
    );
  });
});

AOS.init();

// function test() {
//   var i = 0;
//   var idk = new Array();
//   $("form#schedule_form :input").each(function() {
//     var input = $(this);
//     // console.log($(this));
//     // console.log($(this)[0].children);
//     // console.log($(this)[0].nodeName);
//     // console.log(input);

//     if (input[0].nodeName == "SELECT") {
//       var j = 0;
//       while (j < 3) {
//         // if (input[i].children[j].selected) {
//         //   idk[0] = input[i].children[j].value;
//         //   console.log(input[i].children[j].value);
//         // }
//         // console.log(i);
//         // console.log(j);
//         console.log(input[0]);
//         j++;
//       }
//     } else {
//       //   console.log("PUla");
//     }

//     // idk[i] = input;
//     i++;
//   });
// }

// document.getElementById("form_id").submit();
