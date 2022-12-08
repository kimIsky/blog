action_func=()=>{
    $('.main_flower').animate({
        rotate : '360deg'
    }, 2000, function(){
        $('.main_flower').css('rotate', '0deg');
    });
}
action_photo=()=>{
  $('#fill_6').fadeOut(500, function(){
    $('#fill_5').fadeOut(500, function(){
      $('#fill_4').fadeOut(500, function(){
        $('#fill_3').fadeOut(500, function(){
          $('#fill_2').fadeOut(500, function(){
            $('#fill_1').fadeOut(2500, function(){ 
              $('#fill_1').fadeIn(500, function(){
                $('#fill_2').fadeIn(500, function(){
                  $('#fill_3').fadeIn(500, function(){
                    $('#fill_4').fadeIn(500, function(){
                      $('#fill_5').fadeIn(500, function(){
                        $('#fill_6').fadeIn(500);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

move_event=()=>{
  setInterval(action_photo, 8000);
}
$('section').on("click", function(){
    $('.main_box').css('top', '240px');
    $('.contact_box').css('top', '160px');
    $('.portfolio_box').css('top', '80px');
    $('.about_box').css('top', '0px');
    const idx = $(this).index();
    const total_idx = $("section").length;
    for(let i = idx+1; i < total_idx; i++){
        $('section').eq(i).css('top', 'calc(100% - '+(320-(80*i))+'px)');
    }
    action_func();
    move_event();
});

var swiper = new Swiper(".portfolio_content_box", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
        768: {
          slidesPerView: 2,  //브라우저가 768보다 클 때
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,  //브라우저가 1024보다 클 때
          spaceBetween: 20,
        },
      },
  });