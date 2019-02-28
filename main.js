// HAMBURGERS


const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
  }
  const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
  }
  const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
  }
  const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
  }
  const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
  }
  
  // An array that is grouping the objects together.
  const foods = [hamburger, zucchini, chickenBreast, corn, steak];
  
  // An empty array that will store the objects after the `grill()` function cooks the food.
  const cookedFood = [];
  
  
  function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
  
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
  };
  
  for (let i = 0; i < uncookedFood.length ; i++){
      grill(uncookedFood[i])
      i--;
  }
    
  console.log(cookedFood);
  
  function removeItem (currentItem){
    for (i = 0; i < cookedFood.length; i++){
      if (currentItem.cooked === true){
        uncookedFood.shift(currentItem);
      }
    }
  
  
  }
  