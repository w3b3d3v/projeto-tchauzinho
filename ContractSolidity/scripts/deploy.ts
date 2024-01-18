const main = async () => {
  const waveContract = await hre.ethers.deployContract("WavePortal", { value: hre.ethers.parseEther('0.001') });
  await waveContract.waitForDeployment();
  console.log("Contract deployed to:", waveContract.target);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});