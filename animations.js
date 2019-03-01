// anime({
//   targets: '.blob',
//   scale: [0, 1],
//   delay: function(el, index) {
//     return index * 150
//   },
//   direction: 'forward',
//   easing: 'easeInOutExpo'
// });

anime({
  targets: '.speech-bubble',
  opacity: [0, 1], 
  scale: [0, 1],
  // translateY: -100,
  delay: function(el, index) {
    return index * 500
  },
  direction: 'forward',
  easing: 'easeInOutExpo'
})


// var document.getElementById('blob__left--yellow').style.height;
// var rect = element.getBoundingClientRect();
