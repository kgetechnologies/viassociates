// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// scroll();


function herotext(){
    var tl = gsap.timeline();

    tl.from(".hero-text",{
        x: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
}

function heroimg(){
    var tl = gsap.timeline();

    tl.from(".hero-img",{
        y: '-15',
        opacity: 0,
        duration: 1.5,
        stagger:.1,
        ease: Expo.easeInOut
    })
    
}

function nav(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        z: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
}
nav();
herotext();
heroimg();