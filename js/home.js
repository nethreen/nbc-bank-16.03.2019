// var french = document.getElementById('fr_click'),
//     english = document.getElementById('en_click'),
//     fr_txt = document.querySelectorAll('#fr'),
//     en_txt = document.querySelectorAll('#en'),
//     nb_fr = fr_txt.length,
//     nb_en = en_txt.length;

// french.addEventListener('click', function() {
//     langue(french,english);
// }, false);

// english.addEventListener('click', function() {
//     langue(english,french);
// }, false);

// function langue(langueOn,langueOff){
//     if (!langueOn.classList.contains('current_lang')) {
//         langueOn.classList.toggle('current_lang');
//         langueOff.classList.toggle('current_lang');
//     }
//     if(langueOn.innerHTML == 'Fr'){
//         afficher(fr_txt, nb_fr);
//         cacher(en_txt, nb_en);
//     }
//     else if(langueOn.innerHTML == 'En'){
//         afficher(en_txt, nb_en);
//         cacher(fr_txt, nb_fr);
//     }
// }

// function afficher(txt,nb){
//     for(var i=0; i < nb; i++){
//         txt[i].style.display = 'block';
//     }
// }
// function cacher(txt,nb){
//     for(var i=0; i < nb; i++){
//         txt[i].style.display = 'none';
//     }
// }
// function init(){
//     langue(french,english);
// }
// init();

$(document).ready(function(){
  let elementWidth = $(".togglerMenuSide").width() + "px";

  $(".bars").click(function(){
      $(".togglerMenuSide").animate({right: "0"});
      $(".layer").addClass("active");
  });

  $(".times").click(function(){
      $(".togglerMenuSide").stop().animate({right: `-${elementWidth}`}, "slow");
      $(".layer").removeClass("active");
  });

  $(".layer").click(function(){
      $(".togglerMenuSide").animate({right: `-${elementWidth}`}, "slow");
      $(".layer").removeClass("active");
  });

});
$(document).ready(function(){

    let menuWidth = $(".rightmenu").width() + "px";
 
    $(".toggler").click(function(){
        $(".rightmenu").animate({right: "0"},);
        $(".layer").addClass("active");
    })

    $(".times").click(function(){
        $(".rightmenu").stop().animate({right: `-${menuWidth}`},500);
        $(".layer").removeClass("active");
    });

    $(".layer").click(function(){
        $(".rightmenu").stop().animate({right: `-${menuWidth}`},);
        $(".layer").removeClass("active");
    });
    
    let menuWidth2 = $(".leftmenu-bar").width() + "px";

    $("#bar1").click(function(){
        $(".leftmenu-bar").animate({left: "116px"});
        $("#bar1").hide();
        $("#bar2").fadeIn("slow")
    })

    $("#bar2").click(function(){
        $(".leftmenu-bar").stop().animate({left: `-${menuWidth2}`},500);
        $("#bar2").hide();
        $("#bar1").fadeIn("slow")
    })
    
    let menuWidth3 = $(".middle-menu ").width() + "px";

    $("#bar3").click(function(){
        $(".middle-menu ").animate({left: "0"});
        $("#bar3").hide();
        $("#bar4").fadeIn("slow")
    })

    $("#bar4").click(function(){
        $(".middle-menu ").stop().animate({left: `-${menuWidth3}`},500);
        $("#bar4").hide();
        $("#bar3").fadeIn("slow")
    })
    // console.log({layer});
    
});