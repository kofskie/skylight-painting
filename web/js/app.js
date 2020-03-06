$(function () {

    var $carousel = $('.carousel__container').flickity({
        // options
        wrapAround: true,
        autoPlay: 9000,
        dragThreshold: 10,
        cellSelector: '.carousel__cell',
        pageDots: false,
        arrowShape: {
            x0: 10,
            x1: 45,
            y1: 25,
            x2: 80,
            y2: 50,
            x3: 55
        }
    });

    function checkRoller(scrollPos) {
        // console.log($('.hero__paint-roller').offset().top);

        if (window.matchMedia('(max-width: 900px)').matches) {

            // set if in mobile mode
            $('.hero__paint-roller').css({
                'position': 'absolute',
                'top': '850px',
                'right': '0'
            })

        } else {

            if (scrollPos + $(window).height() > 1350) {

                $('.hero__paint-roller').css({
                    'position': 'absolute',
                    'top': `${1350 - $('.hero__paint-roller').height()}px`,
                    'right': '0'
                })

            } else {

                $('.hero__paint-roller').css({
                    'position': 'fixed',
                    'top': `${$(window).height() - $('.hero__paint-roller').height()}px`,
                    'right': '0'
                })
            }
        }
    }

    // ON LOAD EVENTS
    checkRoller(window.scrollY);


    // ON SCROLL EVENTS
    $(document).on('scroll', function () {
        let scrollPos = window.scrollY;

        checkRoller(scrollPos);
    });

    // ON RESIZE EVENTS
    $(window).resize(function () {
        let scrollPos = window.scrollY;

        checkRoller(scrollPos);
    });

    // ON NAV CLICK EVENTS
    $(".nav__link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
})