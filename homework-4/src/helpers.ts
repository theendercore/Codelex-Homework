export function br() {
  document.getElementById("console").innerHTML += "<br>";
}

export function log(string: string, value: any) {
  document.getElementById("console").innerHTML +=
    string + '<span class="val">' + value + "</span>" + "<br>";
  console.log(string + value);
}
