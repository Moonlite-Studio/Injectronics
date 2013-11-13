Template.about.rendered = function(){
	flexslide();

    if ($(".flexslider").length) {
        $('.flexslider').flexslider();
    }

        var $container = $(".services_circles");
        var $texts = $container.find(".description .text");
        var $circles = $container.find(".areas .circle");

        $circles.click(function () {
            var index = $circles.index(this);
            $texts.fadeOut();
            $texts.eq(index).fadeIn();
            $circles.removeClass("active");
            $(this).addClass("active");
        });

        //Start circles on first circle
        var index = $circles.index($('#first_circle'));
        $texts.fadeOut();
        $texts.eq(index).fadeIn();
        $circles.removeClass("active");
        $('#first_circle').addClass("active");
};