function calculator() {
  const principal = parseFloat(document.getElementById("interest").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  const interest = (principal * rate * time) / 100;

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("useroutput").innerHTML =
      "Invalid input, Enter valid data";
    return;
  } else if (document.getElementById("monthly").checked) {
    document.getElementById(
      "useroutput"
    ).innerHTML = `Monthly Interest is : Rs ${interest / yearToMonth(time)}`;
    return;
  } else if (document.getElementById("per-annum").checked && time == 1) {
    document.getElementById(
      "useroutput"
    ).innerHTML = `Anually or Total Interest is : Rs ${interest}`;
    return;
  } else if (document.getElementById("per-annum").checked) {
    document.getElementById(
      "useroutput"
    ).innerHTML = `Annually Earned Interest is : Rs ${
      (interest / yearToMonth(time)) * 12
    }`;
    return;
  } else if (document.getElementById("total-interest").checked) {
    document.getElementById(
      "useroutput"
    ).innerHTML = `Total Earned Interest is : Rs ${interest}`;
    return;
  } else {
    document.getElementById(
      "useroutput"
    ).innerHTML = `Please Select Atleast one option!!
    `;
    return;
  }
}

function yearToMonth(year) {
  if (year >= 2) {
    return year * 12;
  } else {
    return year * 12;
  }
}
