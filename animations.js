anime({
  targets: 'img',
  scale: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  direction: 'forward'
});
