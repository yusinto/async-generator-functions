console.log('Welcome to async generator function demo!');

async function* createIteratorAsync () {
  yield await 1;
  yield await 2;
}

const it = createIteratorAsync();

(async function testFunction() {
  for await (const n of it) {
    console.log(n);
  }
})();