document.queryselector('#output').style.visibility=hidden;

document.queryselector('#inputValue').addeventListener('input,'convert);

document.queryselector('#unit').addeventListrner('input',convert);

function convert(e){






	let input = e.target.value;
	let input = document.queryselector('#inputValue').value




	let unit = document.queryselector('unit').value


	switch(unit){
		case 'lbs':
		  convertlbs(input);
		  break;
		  case 'grams':
		   convertGrams(input);
		   break;
		case kilograms :
		convertGrams(input);
		   break;
		   case 'meters':
		   convertMeters(input);
		   break;     
	}



	document.queryselector('#output').style.visibility="visible"







	document.queryselector('#gram').innerHTML = input * 453.592;
	function convertlbs(num){
		console.log('Value is:' + num);
		document.queryselector('#output').innerHTML =

		

	}