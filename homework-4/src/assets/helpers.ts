export function br() {
  document.getElementById("console").innerHTML += "<br>";
}

export function log(string: string, value: any) {
  document.getElementById("console").innerHTML +=
    string + '<span class="val">' + JSON.stringify(value) + "</span>";
  br();
  console.log(string + JSON.stringify(value));
}

/*
  !Test function
 - It takes in an infinite amount of inputs
 - The first one is designated to be the callback func
 - The second is the function name
 - The rest ar the test variables 
 - Then It determine if the function has multi or single variable inputs  
*/

export function test(...args: any) {
  let func = args[0];
  log("Function - ", args[1]);
  for (let i = 2; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      if (args[i][1]  === "SingleArray") {
        log("test " + (i - 1) + ": ", func(args[i][0]));
      } else {
        log("test " + (i - 1) + ": ", func(...args[i]));
      }
    } else {
      log("test " + (i - 1) + ": ", func(args[i]));
    }
  }
  br();
}
