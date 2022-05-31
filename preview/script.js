var og = console.log;

console.log = function(arg) {
  if (arg == 'super secret debug') alert('welcome to the cool kids club. debug mode enabled.');
  og(arg);
}