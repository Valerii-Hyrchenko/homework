$('.busy').parallax({imageSrc: './img/parallax/build-background.jpg',
speed: 0.1});
$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(400);
})
$('.customers__content-items-flex').on('click', function(){
    $(this).parent('.customers__content-items').toggleClass('customers__content-items-toggle');
    $(this).children('.customers__content-item-title').toggleClass('customers__content-item-title-toggle');
    $(this).next('p').slideToggle(400);
})