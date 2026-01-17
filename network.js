async function getNetworkName() {
  const network = await provider.getNetwork();
  return network.name;
}
