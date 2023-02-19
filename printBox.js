function printBox(width, height) {
  for (var i = 0; i < height; i++) {
    var line = ' ';
    for (var j = 0; j < width; j++) {
      if (i === 0 ||  i === height - 1 || j === 0 || j === width - 1) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

printBox(5, 4);
printBox(6, 5);

module.exports = printBox
