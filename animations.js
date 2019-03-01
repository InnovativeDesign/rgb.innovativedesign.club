var hero_timeline = anime.timeline({
  easing: 'easeInOutExpo',
});

hero_timeline
.add({
  targets: '.blob-main',
  scale: [0, 1],
  direction: 'forward',
  duration: 700
})
.add({
  targets: 'h1',
  scale: [0, 1],
  delay: function(el, index) {
    return index * 300
  },
  duration: 900,
  direction: 'forward',
}, '-=300')
.add({
  targets: '.speech-bubble',
  opacity: [0, 1],
  scaleY: [0, 1],
  delay: function(el, index) {
    return index * 400
  },
  direction: 'forward',
}, '-=700')
.add({
  targets: '.blob',
  scale: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  direction: 'forward',
}, '-=700')
.add({
  targets: '.logo-intersect',
  opacity: [1, 0],
  duration: 500,
  delay: 200
})
.add({
  targets: '.button__container button',
  scale: [0, 1],
  duration: 500,
})


// Create a timeline with default parameters
// var tl = anime.timeline({
//   easing: 'easeInOutExpo',
// });
//
// // Add children
// tl
// .add({
//   targets: '.speech-bubble',
//   opacity: [0, 1],
//   scaleY: [0, 1],
//   // translateY: -100,
//   delay: function(el, index) {
//     return index * 400 + 1200
//   },
//   direction: 'forward',
// })
// .add({
//   targets: '.logo-intersect',
//   opacity: [1, 0],
//   duration: 500,
//   delay: 300
// });



// anime({
//   targets: '.speech-bubble',
//   opacity: [0, 1],
//   scaleY: [0, 1],
//   // translateY: -100,
//   delay: function(el, index) {
//     return index * 500 + 1400
//   },
//   direction: 'forward',
//   easing: 'easeInOutExpo'
// })


// var document.getElementById('blob__left--yellow').style.height;
// var rect = element.getBoundingClientRect();
