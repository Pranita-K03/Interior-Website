$(document).ready(function(){


$(".fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-active");
});

$(window).on("load scroll", function(){
    $(".fa-bars").removeClass("fa-times");
    $("nav").removeClass("nav-active");
})

    $(".count").each(function(){
        var $this = $(this);
        var countTo = $this.attr("data-count");
        $({countNum : $this.text()}).animate({
            countNum: countTo,
        },
        {
            duration : 5000,
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete:function(){
                $this.text(this.countNum + "+");
            },
        }
        );
    });
});