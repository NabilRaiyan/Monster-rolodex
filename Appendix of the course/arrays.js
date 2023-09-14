// map()
// filter();
// reduce();
// find();
// includes();


// map() function allows us to create new array based on our existing array
const array = [1, 2, 3, 4, 5];
array.map( el => el + 1); 
array.map( el => "b"); 


// filter() function allows us to filter element based on condition and create a new array from new element

array.filter(el => el > 3);
array.filter(el => el = true);
array.filter(el => el < 4);


// includes() check inside the array is the value is exist in the array