$(function () {
  $(window).on("load", function () {
    $(".wrapper").css({
      "background-image": "url(./images/main01.jpg)",
    });
  });
  arguments$("a.btn").click(function (e) {
    e.preventDefault();
    let w=$('.searchbox').css('width');
    if(w !='350px').css({
      opacity: 1,
      width: "350px",
    });
  }else{
    $('.searchbox').css({
      opacity:0,
      width: "0px",
    });
  }
  });
  daySlide();
});

function daySlide() {
  $(".five-day").slick({
    centerMode: true,

    centerPadding: "20px",

    slidesToShow: 3,

    slidesToScroll: 3,

    arrows: false,

    dots: false,

    autoplay: true,

    autoplaySpeed: 3000,
  });
}
