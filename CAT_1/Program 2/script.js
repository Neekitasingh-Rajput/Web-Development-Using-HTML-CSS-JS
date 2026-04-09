function fact() {
    let n = document.getElementById("num").value;
    let f = 1;

    for (let i = 1; i <= n; i++) {
      f = f * i;
    }

    document.getElementById("result").innerHTML =
      "Factorial is: " + f;
  }