
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

	/*
	gsap.set('.laptop-2', { xPercent: -50 });
	gsap.to('.laptop-2', {
		xPercent: 20,
		ease: 'none',
		scrollTrigger: {
			trigger: '.laptop-2',
			scrub: 1,
		},
	});

	gsap.set('.laptop-3', { xPercent: 10, scale: 0.8 });
	gsap.to('.laptop-3', {
		scale: 1.9,
		xPercent: 5,
		ease: 'none',
		scrollTrigger: {
			trigger: '.laptop-3',
			scrub: 1,
		},
	});

	gsap.set('.social__card-fb', { yPercent: 0, xPercent: 0 });
	gsap.to('.social__card-fb', {
		yPercent: -50,
		xPercent: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.social__card-fb',
			scrub: 1,
		},
	});

	gsap.set('.social__card-insta', { yPercent: -50, xPercent: -10 });
	gsap.to('.social__card-insta', {
		yPercent: -70,
		xPercent: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.social__card-insta',
			scrub: 1,
		},
	});

	gsap.set('.data__card-check', { yPercent: 0 });
	gsap.to('.data__card-check', {
		yPercent: -50,
		ease: 'none',
		scrollTrigger: {
			trigger: '.data__card-check',
			scrub: 1,
		},
	});
	gsap.set('.data__card-payment', { yPercent: -50 });
	gsap.to('.data__card-payment', {
		yPercent: -150,
		ease: 'none',
		scrollTrigger: {
			trigger: '.data__card-payment',
			scrub: 1,
		},
	});
	gsap.set('.ball-1', { yPercent: -50 });
	gsap.to('.ball-1', {
		yPercent: -250,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball-1',
			scrub: 1,
		},
	});

	gsap.set('.ball-2', { xPercent: -50 });
	gsap.to('.ball-2', {
		xPercent: -250,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball-2',
			scrub: 1,
		},
	});

	gsap.set('.ball-3', { yPercent: -50 });
	gsap.to('.ball-3', {
		yPercent: -250,
		ease: 'none',
		scrollTrigger: {
			trigger: '.ball-3',
			scrub: 1,
		},
	});

	ScrollTrigger.create({
		trigger: '.header',
		start: 'top top+=90px',
		endTrigger: '.introduce',
		end: 'center center',
		pin: true,
		pinType: 'fixed',
		markers: false,
		pinReparent: true,
		pinSpacing: false,
	});

	ScrollTrigger.create({
		trigger: '.introduce',
		start: 'bottom bottom-=100px',
		endTrigger: '.features',
		end: 'center center',
		pin: true,
		pinType: 'fixed',
		markers: false,
		pinReparent: true,
		pinSpacing: false,
	});

	*/
}




