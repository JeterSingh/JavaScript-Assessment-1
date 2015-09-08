//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hairColor': 'brown' //needed to fix variable name as no spaces allowed
};
me.name = 'Ranjit Ahluwalia';
me.age = 41;
me.hairColor = 'black';
//2. Iterate over the object to console.log the propery or key names. 
for (prop in me) {
    if (!me.hasOwnProperty(prop)) {
        //The current property is not a direct property of p
        continue;
    }
    console.log('Property ' +prop + ' is ' + me[prop]); // note you have to reference like an array
}