$(document).ready(function() {
    
	$('#fullpage').fullpage({
		//Навигация
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: false,
		slidesNavigation: false,
        slidesNavPosition: 'bottom',
        

		//Скроллинг
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Доступ
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: false,

		//Дизайн
		controlArrows: false,
		verticalCentered: true,
		sectionsColor : [],
		paddingTop: '4rem',
		paddingBottom: '',
		fixedElements: '',
		responsiveWidth: 768,
		responsiveHeight: 600,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Настроить селекторы
		sectionSelector: 'section',
		slideSelector: '.slide',

        lazyLoading: true,

		//события
		onLeave: function(index, nextIndex, direction) {
					var $isAnimatedSecond = $('.second .is-animated'),
					$isAnimatedThird = $('.third .is-animated'),
					$isAnimatedThirdSingle = $('.third .is-animated__single'),
					$mySecondContainer = $('.section-about-me .container'),
					$myThirdContainer = $('.section-my-works .container');

					function addDelay(time, els) {
						$.each(time, function(index, value) {
						els.eq(index).css('animation-delay', value + 's');
					});
					};

					if( index == 1 && nextIndex == 2 || index == 3 && nextIndex == 2 ) {
						$isAnimatedSecond.addClass('animated zoomIn');

						var time = [ 0.1, 0.2, 0.4, 0.6, 0.8, 1 ];
						addDelay(time, $isAnimatedSecond);

						$mySecondContainer.addClass('opacity-one');
				}
				
					else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
						$isAnimatedThird.addClass('animated fadeInRight');

						var time = [ 0.2, 0.4, 0.6, 0.8 ];
						addDelay(time, $isAnimatedThird);
						
						$isAnimatedThirdSingle.addClass('animated fadeInDown').css('animation-delay', '.4s');
						$myThirdContainer.addClass('opacity-one');
					
				} 
			},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){
			autoScrolling: false;
        },
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        
    });
   
});

