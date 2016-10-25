function pow(base, exponent){
    var number = 0;
    if (exponent === 0) {
	return 1; 
    } 
    
    for (count = 0; count < exponent; count++){
	number *= base; 	    	
    }
   
    return number; 
}

console.log(pow(25, 40));
