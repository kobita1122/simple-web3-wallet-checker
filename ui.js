async function updateUI() {
  const address = await getWalletAddress();
  const network = await getNetworkName();
  const balance = await getBalance();

  document.getElementById("address").innerText = address;
  document.getElementById("network").innerText = network;
  document.getElementById("balance").innerText = balance;
}
