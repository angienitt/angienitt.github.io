$(document).ready(function () {
  	$(".form").on("click", ".tab", function(){
  	$(".form").find(".active").removeClass("active");
  	$(this).addClass("active");
  	$(".box").eq($(this).index()).addClass("active");
  });
});