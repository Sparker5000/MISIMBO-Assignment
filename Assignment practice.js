function printint(n){
	var i = 1
	while(i <= n){
		console.log(i);
		i++;
	}
}


function printintRev(n){
	var i = 1
	while(i >= n){
		console.log(i);
		i--;
	} 
}


function checkinput(x){

   if(typeof x== 'number') {
   	 return "number";
   	} else if(typeof x== 'string'){
      return "string";
   	} else if(typeof x== 'boolean'){
   		return "boolean";
   	}
}


function simpleEvenAdding(num){
	var answer = 0
	for(var i = 2; i <= num; i+=2){
		answer =answer =i; 
	}
}

function letterCapalize(str){
	var myArray = str.spilt("");
	var myString =""
	for(var i=0;i<myArray.length;i++){
		var currentword = myArray[i][0].toUpperCase() + myArray.slice(1);
	
		myString.slice(i);
	}

}

function simpleReverse(str){
	var newstring = "";
	for(var i = str.length - 1; i >= 0; i--){
		newstring += str[i];
		return newString;
}
}

//function findDiff(arr){
 // max
//var max = Math.max(...arr);
 // min
//var min = Math.min(...arr);
 //subtract
 //return max - min
//}


//console.log(findDiff([1,2,4,6,20,3]));

//console.log(findDiff([24,22,23,22,24]));

//console.log(findDiff([1,1,1,1,1]));

//console.log(findDiff([1])); 

//console.log(findDiff([]))

function timeConvert(num){

return parseInt(num/60) +"i" + num % 60; 
}


console.log(timeConvert(64));





function findstr(str,long){

return(i = 0)

}


console.log()

function selfDividingNumbers(left,right){
	for(var i = left;i<=;i++){

		if(isSelfDivingNumber()){
			myArr.push(i);
		}
	}

}	






 
//function moveZero(nums)


