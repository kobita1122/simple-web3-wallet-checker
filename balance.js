async function getBalance() {
  const address = await getWalletAddress();
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
}
