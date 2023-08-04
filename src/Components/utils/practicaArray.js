function sumarNumerosPares(arrayConNumeros) {
  // Reduce que solo suma números pares
  const sumaTotal = arrayConNumeros.reduce((acumulador, numeroActual) => {
    if (numeroActual % 2 === 0) {
      return acumulador + numeroActual;
    } else {
      return acumulador;
    }
  }, 0);
  // Return de la suma total
  return sumaTotal;
}

console.log(sumarNumerosPares([2, 3, 4, 5, 6, 10, 11]));
