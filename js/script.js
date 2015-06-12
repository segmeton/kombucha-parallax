(function($)
{
    $(document).ready(function()
    {   
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
            triggerElement: '.test'
        })
        .addTo(controller);
    });
})(jQuery);