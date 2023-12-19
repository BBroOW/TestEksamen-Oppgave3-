// Funksjon for å finne minste verdi i en liste
function findMinValue(numbers) {
  return Math.min(...numbers);
}

// Test av funksjonen med gitt liste
const values = [1, -1, 8, -5];
const minResult = findMinValue(values);

console.log("Minste verdien er:", minResult);
