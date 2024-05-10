// Question 5: (Adding interactivity features on apple.com website’s footer section)
// The following question is based on the responsive Apple website you built back in phase 1. As
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of
// the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote
// from the link provided below to implement the interactivity of apple.com's footer section.

$(".shop").on("click", function() {
  if($(window).width() > 760){

    $(this).toggleClass("expanded");
    $(this).next("ul").toggle();}
    else{
      $(this).next("ul").show();}
    }
  );
  $(window).on(resize)