(function($) {
    $("#b1").click(function(){
        $("#tech_skills").css({ "display": "" });
        $("#soft_skills").css({ "display": "none" });
      });

    $("#b2").click(function(){
        $("#soft_skills").css({ "display": "" });
        $("#tech_skills").css({ "display": "none" });
    });
  
})(jQuery); // End of use strict