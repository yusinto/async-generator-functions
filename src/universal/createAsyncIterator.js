const registerUser = async () => {
  const url = '/api/registerUser';
  const response = await fetch(url);
  const responseJson = await response.json();
  return `Registering user... ${responseJson}`;
};

const placeOrder = async () => {
  const url = '/api/placeOrder';
  const response = await fetch(url);
  const responseJson = await response.json();
  return `Placing order... ${responseJson}`;
};

const emailReceipt = async () => {
  const url = '/api/emailReceipt';
  const response = await fetch(url);
  const responseJson = await response.json();
  return `Emailing receipt... ${responseJson}'`;
};

export default async function* createAsyncIterator () {
  yield await registerUser();
  yield await placeOrder();
  yield await emailReceipt();
  return;
}
