//var x = "hello";
//var y = null;
//var z;
//console.log(x + ","+y+","+z);

//let x = "hello js";
//console.log(x);

//let number = 25;
//let number1 = 100;
//let number3 = number * number1;
//console.log(number3);

//let isVal = false;
//let count = 0;

//if(isVal) {
	//count++;
	//console.log(count);
//}
//else if(!isVal) {
	//count--;
	//console.log(count);
//}
//else {
//console.log("error");
//}


//scope1
//=======
//let varone = "varone"; //varone is global scope
//if(true) {
	//var vartwo = "vartwo"; //local
	//console.log(vartwo);
	//let varthree ="varthree"; //varthree is a local scope 
		/*correct way for varthree*/
		//if(true) {
			//let varthree = "varthree"; //write var 
		//}
	//}
//console.log(varthree); //varthree gives error because local scope


//scope2
//======

let name = "milind"; //this is global variable
if(true) {
	//same name one global and one is local obsiously both are differnect but run local var
	let name = "jen";
	console.log(name); //this is local variable 
}
console.log(name);

//function 
