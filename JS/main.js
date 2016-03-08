 $(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

   
         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

});


var userAge = parseInt(prompt("What's your age?"),10);
if (isNaN(userAge)) {
	console.log("It looks like you didn't enter a number.");
} else if (userAge < 21) {
	console.log("Sorry, you have to be 21 or older to use this website!");
} else {
	console.log("You're " + userAge + " years old? Go ahead!");
}