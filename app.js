function calculator() {
  const principal = parseFloat(document.getElementById("interest").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  const interest = (principal*rate*time)/100;
  

  if( isNaN(principal) ||isNaN(rate) || isNaN(time) ){
    document.getElementById("useroutput").innerHTML = "Invalid input, Enter valid data";
    return;
    
  }
    else{
        document.getElementById("useroutput").innerHTML =`Acquired Interest : Rs ${interest}` ;
        return;

    }


  }
  

