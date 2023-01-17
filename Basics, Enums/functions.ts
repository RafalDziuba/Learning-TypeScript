function add(n1: number, n2: number): number {
  return n1 + n2;
}


//void if returns nothing
function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  let result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

// combineValues(5, 5);

addAndHandle(1, 1, (result) => {
  console.log(result);
});
