gsap.fromTo('.btn', { rotate:'750',opacity:0, scale:0},
{duration:1,opacity:1, rotate:0, scale:1})

//gsap.from('.good1', {x:-500, duration:1, ease:"bounce"})
gsap.from('.good3', {x:500, duration:1, ease:"bounce"})
gsap.from('.good2', {y:2000, duration:1, ease:"bounce"})



gsap.registerPlugin(ScrollTrigger);

gsap.from(".good1",{
  scrollTrigger:".good1",
  x: -500,
  duration: 1,
  ease:"bounce"
  
  });