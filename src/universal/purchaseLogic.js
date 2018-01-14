const registerUser = async () => {
  const url = '/api/registerUser';
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

const placeOrder = async () => {
  const url = '/api/placeOrder';
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

const emailReceipt = async () => {
  const url = '/api/emailReceipt';
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

export default async function* createAsyncIterator () {
  yield 'Registering user...';
  yield await registerUser();

  yield 'Placing order...';
  yield await placeOrder();

  yield 'Emailing receipt...';
  yield await emailReceipt();

  return;
}
