// scrollmagic - great for setting triggerElement and triggerHook
//best used in conjunction with greensock
//sample ways of implementation

$(function() {
  //initiate a scrollmagic controller
  var controller = new ScrollMagic.Controller();

  ///////////////////////////////////////////////////////////////////////////////

  //1. pinning effect
  var pinscene = new ScrollMagic.Scene({
    triggerElement: ".scene",
    triggerHook: 0,
    duration: "100%" //apply duration if you want to pin it at a certain point
  })
  .setPin(".scene", {
    pushFollowers: false  //need this set to false to achieve pin
  })
  .addTo(controller); //setpin

  ///////////////////////////////////////////////////////////////////////////////

  //2. fade effect for the text
  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#text1",
    // duration: "90%", //for ending
    triggerHook: 1,
    //reverse: false //so that animation will only happen once, default true
  })
  .setClassToggle("#text1", "fade-in") //setClassToggle
  // .addIndicators() //requires plugin, for debug
  .addTo(controller);

  //2. for the img1
  var slide = new ScrollMagic.Scene({
    triggerElement: "#img1",
    triggerHook: 0.5
  })
  //TweenMax.to
  .setTween(TweenMax.to("#img1",0.5,{left:-250})) //move the target to left-250 position
  .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //3. parallax effect bork bork - uses gsap tweenmax
  var parallaxScene = new ScrollMagic.Scene({
    triggerElement: ".bg-parallax",
    triggerHook: 1,
    duration: "200%"
  })
  .setTween(TweenMax.from(".bg", 1, {y: "-50%",ease:Power0.easeNone}))
  .addTo(controller);

  var bounce = new ScrollMagic.Scene({
    triggerElement: ".bork",
    triggerHook: 1
  })
  //TweenMax.from
  .setTween(TweenMax.from(".bork",1, {opacity:0, scale: 0, ease:Power1.easeOut})) //from the current positon, make the target bounce
  .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////

  //4. declare timeline variable
  var myTL = new TimelineLite();

  myTL
    .to("#img2", 0.25, {x: 190, ease: Bounce.easeOut})
    .to("#text2", 0.25, {x: -150, ease: Bounce.easeOut}, 0);

  //declare timeline scene
  var myTLscene = new ScrollMagic.Scene({
    triggerElement: "#scene2",
    triggerHook: 0.5
  })
  //set and add to controller
  .setTween(myTL)
  .addTo(controller);

      //same effect as the above code (without using timeline)
      // var easeBounce = new ScrollMagic.Scene({
      //   triggerElement: "#img2",
      //   triggerHook: 0.5
      // })
      // .setTween(TweenMax.to("#img2", 0.5, {left: "330px", ease: Bounce.easeOut}))
      // .addTo(controller);
      //
      // var easeBounceText = new ScrollMagic.Scene({
      //   triggerElement: "#text2",
      //   triggerHook: 0.5
      // })
      // .setTween(TweenMax.to("#text2", 0.5, {left: "-330px", ease: Bounce.easeOut}))
      // .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //5. declare timeline variable
  var mytimeLine = new TimelineLite();

  mytimeLine
    .from(".firstLine", 0.25, {autoAlpha:0, x:-400})
    .from(".secondLine", 0.25, {autoAlpha:0})
    .from("#img3", 0.5, {opacity:0, y:-400, x:-300, rotation: 90})
    .staggerFrom(".cute-img", 0.25, {scale:0, rotation: -180, autoAlpha:0}, 0.1) //staggered effect - 0.25 is the duration, 0.1 is the interval
    .to("#img3", 0.5, {x: -200 }, 1)
    .timeScale(1.5);

  //declare scene for the timeleine - triggers
  var sceneTL = new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: 0.5
  })
  //set and add to controller
  .setTween(mytimeLine)
  .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //6
  var bounce2 = new ScrollMagic.Scene({
    triggerElement: "#text4",
    triggerHook: 1
  })
  //TweenMax.from
  .setTween(TweenMax.to("#text4",1, {scale: 1.5, x:-50, y:-100, ease:Power1.easeInOut})) //from the current positon, make the target bounce
  .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //7. wipes
  var wipeAnimation = new TimelineLite();

  wipeAnimation
  .fromTo("#scene5",1, {x:"100%"}, {x:"0%", ease: Linear.easeNone})

  var wipeScene = new ScrollMagic.Scene({
    triggerElement: "#scene5",
    triggerHook: 0.5
  })
  .setTween(wipeAnimation)
  .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //8
  var wipeAnimation2 = new TimelineLite();

  wipeAnimation2
  .fromTo("#scene6",1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})

  var wipeScene2 = new ScrollMagic.Scene({
    triggerElement: "#scene6",
    triggerHook: 0.5
  })
  .setTween(wipeAnimation2)
  .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////

  //9
  var wipeAnimation3 = new TimelineLite();

  wipeAnimation3
  .from("#img7",1, {opacity: 0, x: 100, autoAlpha:0})
  .from("#text7",0.5, {opacity: 0, y:500, x:-800, scale: 4,  autoAlpha:0})
  .to("#text7",05, {scale: 1.5})
  .timeScale(3);

  var wipeScene3 = new ScrollMagic.Scene({
    triggerElement: "#img7",
    triggerHook: 0.5
  })
  .setTween(wipeAnimation3)
  .addTo(controller);

  //10
  var wipeAnimation4 = new TimelineLite();

  wipeAnimation4
  .from("#text8",1, {opacity: 0, x: 100, autoAlpha:0})
  .from("#img8",0.5, {opacity: 0, y:500, x:-800, scale: 4,  autoAlpha:0})
  .to("#img8",05, {scale: 1.2})
  .timeScale(3);

  var wipeScene4 = new ScrollMagic.Scene({
    triggerElement: "#img8",
    triggerHook: 0.5
  })
  .setTween(wipeAnimation4)
  .addTo(controller);

});
