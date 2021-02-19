console.log("123");
console.log($);
console.log("321");



$(function() {
    slidingMenu();
  
    function slidingMenu() {
      $nav = $(".nav");
      $nav_item = $nav.find("li");
      $dropdown = $nav_item.has("ul").addClass("dropdown");
      $back_btn = $nav.find("ul").prepend("<li class='js-back'>back</li>");
  
      // open sub-level
      $dropdown.on("click", function(e) {
        console.debug('$dropdown.on("click")');
        e.stopPropagation();
        e.preventDefault();
  
        $(this).addClass("is-open");
        $(this)
          .parent()
          .addClass("slide-out");
      });
  
      // go back
      $back_btn.on("click", ".js-back", function(e) {
        console.debug('$back_btn.on("click")');
        e.stopPropagation();
        $(this)
          .parents(".is-open")
          .first()
          .removeClass("is-open");
        $(this)
          .parents(".slide-out")
          .first()
          .removeClass("slide-out");
      });
    }
  });
  