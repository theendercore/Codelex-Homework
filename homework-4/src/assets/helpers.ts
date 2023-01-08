export function br() {
  document.getElementById("console").innerHTML += "<br>";
}

export function log(string: string, value: any) {
  document.getElementById("console").innerHTML +=
    string + '<span class="val">' + JSON.stringify(value) + "</span>";
  br();
  console.log(string);
  console.log(value);
}

/*
  !Test function
 - It takes in an infinite amount of inputs
 - The first one is designated to be the callback func
 - The second is the function name
 - The rest ar the test variables 
 - Then It determine if the function has multi or single variable inputs  
*/

let timesCalled: number = 1;

export function test(...args: any) {
  let func = args[0];
  log(timesCalled + "-Function :", args[1]);
  for (let i = 2; i < args.length; i++) {
    let text = "└═─test " + (i - 1) + ": ";
    if (Array.isArray(args[i])) {
      if (args[i][1] === "SingleArray") {
        log(text, func(args[i][0]));
      } else {
        log(text, func(...args[i]));
      }
    } else {
      log(text, func(args[i]));
    }
  }
  br();
  timesCalled++;
}
