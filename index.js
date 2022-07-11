let inputPhysics;
let inputChemistry;
let inputBiological;
inputPhysics = prompt("Enter the physics");
inputChemistry = prompt("Enter the chemistry");
inputBiological = prompt("Enter the biological");
let physics = parseInt(inputPhysics);
let chemistry = parseInt(inputChemistry);
let biological = parseInt(inputBiological);
let avarge = (physics + chemistry + biological) / 3 ;
document.write('avarge = ' +avarge)