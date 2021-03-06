/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){
    $.fn.UItoTop=function(options){
        var defaults={
            text:'To Top',
            min:200,
            containerID:'to-top',
            containerHoverID:'to-topHover',
            scrollSpeed:1000,
            easingType:'easeOutQuad'
        },
            settings=$.extend(defaults,options),
            containerIDhash='#'+settings.containerID,
            containerHoverIDHash='#'+settings.containerHoverID;
         $(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);
          return false;
          })
        $(window).scroll(function(){
            var sd=$(window).scrollTop();
            if(typeof document.body.style.maxHeight==="undefined")
            {$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});
            }
            if(sd>settings.min)
                $(containerIDhash).fadeIn();
            else
                $(containerIDhash).fadeOut();
        });
    };
})(jQuery);