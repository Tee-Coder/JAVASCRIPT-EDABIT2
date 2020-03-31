function firstNVowels(s, n)
 {
	var regexample = /[aeiou]/gi;
	var numbervowels = s.match(regexample);
	var output = "";
	if(numbervowels.length >= n)
	{
		for(var i = 0; i < n; i++){
		output += numbervowels[i];	
	} 
	return output;
  } 
  	else 
  {
		return "invalid";				
   }
   
}

console.log(firstNVowels("edible", 7));