$(document).ready(function()
{
    var top_space = 50;

		$('#go-top').click(function()
    {
      $('.active').removeClass();
			var offset = $('body').offset();
			$('html,body').animate({scrollTop: offset.top}, 1000);
		});

    $('.navbar-nav li').click(function()
    {
      var href = $('a', this).attr('href');
      $('html, body').animate({scrollTop: $(href).offset().top}, 1000);
		});
});
