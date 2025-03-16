const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Check for empty values
  if (!dividend || !divider){
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  //Convert numbers from strings
  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  //Check for invalid numbers

  if (isNaN(numDividend) || isNaN(numDivider)){
    console.error(new Error("Invalid Input!!!"));
    document.body.innerHTML = 
    "<h1>Something critical went wrong. Please reload the page</h1>";
    return;
      }

// Check for division by zero
  if (numDivider === 0 ){
    console.error(new Error("division by zero attempted"));
    result.innerText = 
    "Division not performed. Invalid number provided. Try again";
    return;

  }

  // Perform division and show integer result

  result.innerText = Math.trunc(numDividend / numDivider);
});