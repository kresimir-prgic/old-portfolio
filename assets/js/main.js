$(document).ready(function () {
    'use strict';
    
    // SLICK SLIDER
    $('.testSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    
    // MOBILE NAVIGATION
    var mobBtn = $('.mobNav span');
    var mainNav = $('.mainNav');
    
    mobBtn.on('click', function () {
        mobBtn.addClass('active');
        if (mobBtn.hasClass('active')) {
            mainNav.addClass('navReset');
        }
        mainNav.on('click', function () {
            mobBtn.removeClass('active');
            mainNav.removeClass('navReset');
        });
    });
    
    // DOWNLOAD CV
    $(".coverBtn a").on("click", function () {
        window.location = "file:///C:/Users/kresi/Desktop/Creative One Page Portfolio FrontEND/kresimir-prgic-cv.zip";
    });
    
    // SCROLL TO TOP
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(window).height()) {
            $('.toTop').fadeIn(500);
        } else {
            $('.toTop').fadeOut(500);
        }
    });
    
    var toTop = $('.toTop');
    toTop.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 1000, 'swing');
    });
    
    // SCROLL TO ANCHOR
    function scrollToAnchor(aid) {
        var aTag = $("section[class=" + aid + "]");
        $('html,body').animate({scrollTop: aTag.offset().top}, 1000, 'swing');
    }
    
    $(".mainNav ul li:nth-child(2)").click(function () {
        scrollToAnchor('about');
    });
    $(".mainNav ul li:nth-child(3)").click(function () {
        scrollToAnchor('services');
    });
    $(".mainNav ul li:nth-child(4)").click(function () {
        scrollToAnchor('portfolio');
    });
    $(".mainNav ul li:nth-child(5)").click(function () {
        scrollToAnchor('experience');
    });
    $(".mainNav ul li:nth-child(6)").click(function () {
        scrollToAnchor('blog');
    });
    $(".mainNav ul li:nth-child(7)").click(function () {
        scrollToAnchor('contact');
    });
    
    // PORTFOLIO
    $('.portClick li').click(function () {
        $('.portClick li').removeClass('active');
        $(this).addClass('active');
        $('.portSlider li').hide();
    });
    
    $('.portClick li:nth-child(1)').click(function () {
        $('.portSlider li').show();
    });
    $('.portClick li:nth-child(2)').click(function () {
        $('.portSlider .port2').show();
    });
    $('.portClick li:nth-child(3)').click(function () {
        $('.portSlider .port3').show();
    });
    $('.portClick li:nth-child(4)').click(function () {
        $('.portSlider .port4').show();
    });
    $('.portClick li:nth-child(5)').click(function () {
        $('.portSlider .port5').show();
    });
    $('.portClick li:nth-child(6)').click(function () {
        $('.portSlider .port6').show();
    });
    
    // SHOW/HIDE ARTICLE POST
    var body = document.body,
        overlay = document.querySelector('.article'),
        overlayBtts = document.querySelectorAll('a[class$="openPost"],.closePost');

    [].forEach.call(overlayBtts, function(btt) {

      btt.addEventListener('click', function() { 

         /* Detect the button class name */
         var overlayOpen = this.className === 'openPost';

         /* Toggle the aria-hidden state on the overlay and the 
            no-scroll class on the body */
         overlay.setAttribute('aria-hidden', !overlayOpen);
         body.classList.toggle('noScroll', overlayOpen);

         /* On some mobile browser when the overlay was previously
            opened and scrolled, if you open it again it doesn't 
            reset its scrollTop property */
         overlay.scrollTop = 0;

      }, false);

    });
    
});