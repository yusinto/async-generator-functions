const data = [1, 3, 5, 34, 5, 36, 9];

const fetchApi = async (url) => {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

const registerUser = () => fetchApi('/api/registerUser');
const placeOrder = () => fetchApi('/api/placeOrder');
const emailReceipt = () => fetchApi('/api/emailReceipt');

export default async function* createAsyncIterator() {
  let i = 0;

  while (true) {
    const value = data[i++];

    if (!value) {
      yield {value, done: true};
      break;
    }

    yield new Promise(res => res({value, done: false}));
  }
}
