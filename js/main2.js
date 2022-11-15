// Slider Script
$('#slider').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 2000,
});

$('#reviews-slider').slick({
	dots: false,
	infinite: false,
	arrows: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: '<div class="reviews__slider-arrows-item left"></div>',
	nextArrow: '<div class="reviews__slider-arrows-item right"></div>',
});

$(document).on('click', '.reviews__slider-arrows-item.left', function (e) {
	$('#reviews-slider').slick('slickPrev');
});

$(document).on('click', '.reviews__slider-arrows-item.right', function (e) {
	$('#reviews-slider').slick('slickNext');
});

// Header Script
$(document).on('click', '.header__container_burger', function (e) {
	$('.header').toggleClass('burger-active');
});

// Partfolio Down
$(document).on(
	'click',
	'.fullscreen__portfolio-down, .new-portfolio__down',
	function (e) {
		$('html, body').animate(
			{
				scrollTop: $('.portfolio').offset().top,
			},
			1000,
		);
	},
);

/* Наше портфолио - кнопка опуститься вниз */
$(document).on(
	'click',
	'.fullscreen__advertisement-accordion-item',
	function (e) {
		$('.fullscreen__advertisement-accordion-item').removeClass('active');
		$(this).toggleClass('active');
	},
);

/* Наше портфолио - кнопка опуститься вниз */
$(document).on('click', '.steps__down', function (e) {
	$('html, body').animate(
		{
			scrollTop: $('.fullscreen__about').offset().top,
		},
		1000,
	);
});


$(document).ready(function () {
	responsive();
});

$(window).on('resize', function () {
	responsive();
});

let responsive = function () {
	if ($(window).width() < 780) $('.footer').addClass('accordion');
	else $('.footer').removeClass('accordion');
};

$(document).on('click', '.accordion .footer__links-item', function (e) {
	$(this).toggleClass('active');
});

let sliderScroll = 20;

// Slider Script
$(document).on('click', '.about__slider-controls button', function (e) {
	let slider = $(this).parent().data('slider');

	if ($(this).data('arrow') == 'right') sliderScroll += 400;
	else sliderScroll -= 400;

	$(`#${slider} .about__slider-content`).animate(
		{
			scrollLeft: sliderScroll,
		},
		300,
	);
});

// Scroll Script
$(document).on('click', '[data-scroll]', function (e) {
	$('html, body').animate(
		{
			scrollTop: $($(this).data('scroll')).offset().top,
		},
		1500,
	);
});

// parallax Script
$(document).ready(function () {
	if ($('.js-parallax').length) {
		var elem = $('.js-parallax'),
			pos = elem.offset(),
			elem_left = pos.left,
			elem_top = pos.top,
			elem_width = elem.width(),
			elem_height = elem.height(),
			x_center,
			y_center;

		$('.js-parallax').mousemove(function (e) {
			x_center = elem_width / 2 - (e.pageX - elem_left);
			y_center = elem_height / 2 - (e.pageY - elem_top);

			$($(this).data('particles')).each(function () {
				var speed = -2,
					xPos = Math.round(((-1 * x_center) / 30) * speed),
					yPos = Math.round((y_center / 30) * speed);

				if (yPos < 0) yPos = -2 * speed;

				$(this).css(
					'transform',
					'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)',
				);
			});

			$($(this).data('particles2')).each(function () {
				var speed = -1,
					xPos = Math.round(((-1 * x_center) / 50) * speed),
					yPos = Math.round((y_center / 50) * speed);

				if (yPos < 0) yPos = -2 * speed;

				$(this).css(
					'transform',
					'translate3d(' + yPos + 'px, ' + xPos + 'px, 0px)',
				);
			});
		});
	}
});

// Effects Script
var rev = 'undefined' != typeof rev ? rev : {};

$(function () {
	(rev = $.extend(
		{},
		{
			timer: null,
			busy: !1,
			scroll_padding: 0,
			effects_padding: 0,
			refresh: function () {},
		},
		'undefined' != typeof rev ? rev : {},
	)),
		(rev.refresh = function () {
			var a = $(window),
				e = $(document),
				o = $(document.body),
				t = 0,
				l = rev.effects_padding,
				r = a.height() - rev.effects_padding,
				s = rev.scroll_padding,
				v = e.height() - rev.scroll_padding;
			0 === a.scrollTop()
				? o.hasClass('at-top') ||
				  o
						.addClass('at-top')
						.removeClass('at-bottom')
						.removeClass('near-top')
						.removeClass('near-bottom')
				: a.scrollTop() + a.height() === e.height()
				? o.hasClass('at-bottom') ||
				  o
						.addClass('at-bottom')
						.removeClass('at-top')
						.removeClass('near-top')
						.removeClass('near-bottom')
				: a.scrollTop() <= s
				? o.hasClass('near-top') ||
				  o
						.addClass('near-top')
						.removeClass('near-bottom')
						.removeClass('at-top')
						.removeClass('at-bottom')
				: a.scrollTop() + a.height() >= v
				? o.hasClass('near-bottom') ||
				  o
						.addClass('near-bottom')
						.removeClass('near-top')
						.removeClass('at-top')
						.removeClass('at-bottom')
				: (o.hasClass('at-top') ||
						o.hasClass('at-bottom') ||
						o.hasClass('near-top') ||
						o.hasClass('near-bottom')) &&
				  o
						.removeClass('at-top')
						.removeClass('at-bottom')
						.removeClass('near-top')
						.removeClass('near-bottom'),
				$('*[class*="rev"]').each(function () {
					t++;
					var a = this,
						e = $(a),
						o = a.getBoundingClientRect(),
						s = void 0;
					(s =
						o.top > r && o.bottom > r
							? 'rev-below'
							: o.top < r && o.bottom > r
							? 'rev-partially-below'
							: o.top < l && o.bottom > l
							? 'rev-partially-above'
							: o.top < l && o.bottom < l
							? 'rev-above'
							: 'rev-within'),
						e.hasClass('rev-load') &&
							!e.hasClass('rev-within') &&
							(e.removeClass(
								'rev-below rev-partially-below rev-within rev-partially-above rev-above',
							),
							e.addClass('rev-within')),
						e.hasClass(s) ||
							e.hasClass('rev-load') ||
							(e.hasClass('rev-once')
								? (e.hasClass('rev-within') ||
										(e.removeClass(
											'rev-below rev-partially-below rev-within rev-partially-above rev-above',
										),
										e.addClass(s)),
								  (e.hasClass('rev-partially-above') ||
										e.hasClass('rev-above')) &&
										e.addClass('rev-within'))
								: (e.removeClass(
										'rev-below rev-partially-below rev-within rev-partially-above rev-above',
								  ),
								  e.addClass(s)));
				});
		}),
		$(window).bind('scroll resize load ready', function () {
			rev.busy ||
				((rev.busy = !0),
				setTimeout(function () {
					(rev.busy = !1), rev.refresh();
				}, 150));
		});
});



$(window).scroll(function () {
	if (
		$(
			'.fullscreen__development, .fullscreen__branding, .fullscreen__advertisement',
		).length
	) {
		if (
			$(window).scrollTop() >
				$('.fullscreen__development').offset().top - 300 &&
			$(window).scrollTop() < $('.fullscreen__branding').offset().top - 300 &&
			$(window).scrollTop() < $('.fullscreen__advertisement').offset().top - 300
		) {
			$grandient.addClass('fiolet');
			return;
		}

		if (
			$(window).scrollTop() > $('.fullscreen__branding').offset().top - 300 &&
			$(window).scrollTop() <
				$('.fullscreen__advertisement').offset().top - 300 &&
			$(window).scrollTop() < $('.fullscreen__advertisement').offset().top - 300
		) {
			$grandient.removeClass('fiolet');
			return;
		}

		if (
			$(window).scrollTop() >
			$('.fullscreen__advertisement').offset().top - 300
		) {
			$grandient.addClass('fiolet');
			return;
		}
	}
});


