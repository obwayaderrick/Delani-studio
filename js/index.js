$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").fadeIn("2000").hide("2000");
      $("#design").show("2000");
    });
    $("#design").click(function(){
      $("#design").fadeOut("2000");
      $("#design-image").fadeIn("2000");
    });
  });
  $(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").fadeIn("2000").hide("2000");
      $("#development").show();
    });
    $("#development").click(function(){
      $("#development").fadeOut("2000");
      $("#development-image").fadeIn("2000");
    });
  });
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").fadeIn().hide("2000");
      $("#product").show("2000");
    });
    $("#product").click(function(){
      $("#product").fadeOut("2000");
      $("#product-image").fadeIn("2000");
    });
    $(document).ready(function(){
        $("#work").mouseover(function(){
          $("#mouse-hover").show();
        })
        $("#work").mouseout(function(){
          $("#mouse-hover").hide();
        });
    
        $("#work1").mouseover(function(){
            $("#mouse-hover1").show();
          })
          $("#work1").mouseout(function(){
            $("#mouse-hover1").hide();
          });
    
          $("#work2").mouseover(function(){
            $("#mouse-hover2").show();
          })
          $("#work2").mouseout(function(){
            $("#mouse-hover2").hide();
          });
    
          $("#work3").mouseover(function(){
            $("#mouse-hover3").show();
          })
          $("#work3").mouseout(function(){
            $("#mouse-hover3").hide();
          });
    
          $("#work4").mouseover(function(){
            $("#mouse-hover4").show();
          })
          $("#work4").mouseout(function(){
            $("#mouse-hover4").hide();
          });
    
          $("#work5").mouseover(function(){
            $("#mouse-hover5").show();
          })
          $("#work5").mouseout(function(){
            $("#mouse-hover5").hide();
          });
    
          $("#work6").mouseover(function(){
            $("#mouse-hover6").show();
          })
          $("#work6").mouseout(function(){
            $("#mouse-hover6").hide();
          });
    
          $("#work7").mouseover(function(){
            $("#mouse-hover7").show();
          })
          $("#work7").mouseout(function(){
            $("#mouse-hover7").hide();
          });
    
      });
  });
  $(document).ready(function() {
    $("form#delani-form").on('submit',function(event){
      event.preventDefault();
      let name = $("input#name").val();
      let email = $("input#email").val();
      let message = $("textarea#message").val();

      if ($("input#name").val() && $("input#email").val() && $("textarea#message").val()){
          alert ("Hello " + name + ",your message have been received.Thank you for reaching to us.We love you.");
      }
      else {
          alert("Ooops!Kindly complete filling the form,Thank you.");
      }

  });
  });
