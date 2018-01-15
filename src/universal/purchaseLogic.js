const fetchApi = async (url) => {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

const registerUser = () => fetchApi('/api/registerUser');
const placeOrder = () => fetchApi('/api/placeOrder');
const emailReceipt = () => fetchApi('/api/emailReceipt');

export default async function* createAsyncIterator () {
  yield 'Registering user...';
  yield await registerUser();

  yield 'Placing order...';
  yield await placeOrder();

  yield 'Emailing receipt...';
  yield await emailReceipt();

  return;
}
