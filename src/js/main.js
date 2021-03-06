
if (window.screen.availWidth >= 770) {
	// gsap.set('.laptop-1', { xPercent: 20, scale: 0.7 });
	// gsap.to('.laptop-1', {
	// 	xPercent: -20,
	// 	scale: 1,
	// 	ease: 'none',
	// 	scrollTrigger: {
	// 		trigger: '.laptop-1',
	// 		scrub: 1,
	// 	},
	// });

	ScrollTrigger.create({
		trigger: '.about',
		start: 'bottom bottom-=100px',
		endTrigger: '.about',
		// end: 'top',
		pin: true,
		pinType: 'fixed',
		markers: false,
		pinReparent: true,
		pinSpacing: false,
	});

	gsap.set('.hard-win .p__text', { opacity: 0 });
	gsap.to('.hard-win .p__text', {
		opacity: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hard-win .p__text',
			scrub: 1,
		},
	});

	gsap.to('.ball2', {
		opacity: 1,
		y: 500,
		x: 100,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball2',
			scrub: 1,
		},
	});
	gsap.set('.ball4', {scale:.2})
	gsap.to('.ball4', {
		scale: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball4',
			scrub: 1,
		},
	});
	gsap.set('.ball5', { opacity: 1, y: -200 });
	gsap.to('.ball5', {
		opacity: 1,
		y: 500,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball5',
			scrub: 1,
		},
	});

	gsap.set('.ball6', { scale:.5});
	gsap.to('.ball6', {
		scale: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball6',
			scrub: 1,
		},
	});
	// gsap.set('.was-winner .container', { duration: 2, opacity: 1, y: 500 });
	gsap.to('.was-winner .container', {
		opacity: 1,
		yPercent: -100,
		ease: 'none',
		scrollTrigger: {
			trigger: '.was-winner .container',
			scrub: 1,
		},
	});

	// gsap.set('.ball8', { scale: 0.5 });
	gsap.to('.ball7', {
		x:-250,
		y:50,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball7',
			scrub: 1,
		},
	});
	gsap.set('.ball9', { scale: 0.5 });
	gsap.to('.ball9', {
		scale: 1.5,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball9',
			scrub: 1,
		},
	});

}




