console.log('script.js is sourced');
// global variables
var inventory=[];
var selectedSize = 'none';
var selectedColor ='none';

var addItem = function (nameMe, colorMe, sizeMe){
  console.log('adding item: ' + nameMe + '' + colorMe + '' + sizeMe);
//create object
var newItem = {
  name: nameMe,
  color: colorMe,
  size: sizeMe
}; //end newItem array
  //push into inventory array
  inventory.push(newItem);
  // show updated inventory
  console.log(inventory);
  // show updated inventory
}; //end addItem

var searchInventory = function (){
  console.log('in searchInventory');
//get size from user
selectedSize = document.getElementById('sizeIn').value ;
// get color from user
selectedColor = document.getElementById('colorIn').value ;
console.log('looking for something ' + selectedColor + ' in ' + selectedSize);
// check if an item fits this description
//loop through the inventory array and see if any item matches
//array for our results
var results = [];
for( var i = 0; i < inventory.length; i++) {
  //does this item match my description?
  if(inventory[i].color == selectedColor && inventory[i].size == selectedSize){
    results.push(inventory[i]);
  }//end if match
} // end for
console.log(results.length + ' matches found');
console.log(results);

};// end searchInventory


/////////////////// ADD ITEMS /////////////////
///name, color, size)
addItem('Smurf','Blue', 'Small');
addItem('Jeans', 'Blue', 'Small');
addItem('Prime Academy t-shirt','Mermaid Treasure', 'Large');
addItem('Baby Banner','Bus Seat Green', 'Medium');
addItem('Eggplant','Purple', 'Small');
addItem('Prince','Purple', 'Medium');
