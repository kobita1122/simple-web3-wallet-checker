document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  await updateUI();
});
