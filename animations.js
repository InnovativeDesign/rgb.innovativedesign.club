var hero_timeline = anime.timeline({
  easing: 'easeInOutExpo',
});

hero_timeline
.add({
  targets: '.blob-main',
  scale: [0, 1],
  direction: 'forward',
  duration: 500
})
.add({
  targets: 'h1',
  scale: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  duration: 900,
  direction: 'forward',
}, '-=300')
.add({
  targets: '.speech-bubble',
  opacity: [0, 1],
  scaleY: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  direction: 'forward',
})
.add({
  targets: '.blob',
  scale: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  direction: 'forward',
})
.add({
  targets: '.logo-intersect',
  opacity: [1, 0],
  duration: 1000
})
.add({
  targets: '.button__container button',
  scale: [0, 1],
  duration: 500,
})
