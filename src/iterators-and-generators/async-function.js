function asyncFn(v) {
  setTimeout(function () {
    it.next(v * 2);
  }, 2000);
}

function* gen() {
  let result = yield asyncFn(2);
  console.log(result);
}

let it = gen();
it.next();
