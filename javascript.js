
$(document).scroll(function () {
  var scroll = $(window).scrollTop();

  var LeftBox1 = -210 + (scroll * 0.8);
  var LeftBox2 = -500 + (scroll * 0.6);

  //center letter
  var TopBox3 = -700 + (scroll * 0.5);
  var LeftBox3 = -700 + (scroll * 0.5);
  var BottomBox3 = -700 + (scroll * 0.5);
  var RightBox3 = -700 + (scroll * 0.5);
  

  if (LeftBox1 < 10) {
      $('.letter').css({ left: LeftBox1 + "px"});
  }

  if (LeftBox2 < 10) {
    $('.letter2').css({left: LeftBox2 + "px"});
  }

  //center letter 

  if (TopBox3 < 0) {
    
    $('.top').css({top: TopBox3 + "px"});
  }

  if (BottomBox3 < 0) {
    $('.bottom').css({bottom: BottomBox3 + "px"});
  } 

  if (RightBox3 < 5) {
    $('.right').css({right: RightBox3 + "px"});
  }

  if (LeftBox3 < 5) {
    $('.left').css({left: LeftBox3 + "px"});
  }
});


