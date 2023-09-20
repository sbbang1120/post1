$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.tab-wrapper .tab').on('click', function () {

        $('.tab-wrapper .tab').removeClass('on');
        $(this).addClass('on');
        $('.tab-contents').hide();
        let tabid = $(this).attr("rel");
        $('.' + tabid).fadeIn();
    });

    $('.tab-wrapper02 .tab').on('click', function () {

        $('.tab-wrapper02 .tab').removeClass('on');
        $(this).addClass('on');
        $('.tab-contents02').hide();
        let tabid = $(this).attr("rel");
        $('.' + tabid).fadeIn();
        $('.product_slide').resize();
        $('.product_slide').slick('refresh');
    });


    $('.product_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        setPosition: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.main_listtab .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.main_listtab .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })

    $('.footer_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 6,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
})
