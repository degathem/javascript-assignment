var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

/**
 * nameFormatter function takes a name in 'First Last' format and switches it to 
 * 'Last, First' format.
 */

function nameFormatter(name){
  var fullNameArray = [];
  fullNameArray = name.split(' ');
  return fullNameArray[1] + ', ' + fullNameArray[0]; 
};

function alphabetizer(names) {
    var formattedMoonWalkers = [];
    for (var name in names){
      formattedMoonWalkers.push(nameFormatter(names[name]));
    }
    return formattedMoonWalkers.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));