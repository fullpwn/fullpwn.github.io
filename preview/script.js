var og = console.log;

console.log = function(arg) {
  if (arg == 'heyo') alert('send the missles!');
  og(arg);
}