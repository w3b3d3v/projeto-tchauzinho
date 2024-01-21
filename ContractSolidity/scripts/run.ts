const main = async () => {
  const waveContract = await hre.ethers.deployContract("WavePortal", { value: hre.ethers.parseEther('0.1') });
  await waveContract.waitForDeployment();
  console.log("Contract deployed to:", waveContract.target);

  /*
  * Consulta saldo do contrato
  */
  let contractBalance = await hre.ethers.provider.getBalance(
      waveContract.target
  );
  console.log(
      "Saldo do contrato:",
      hre.ethers.formatEther(contractBalance)
  );

  /*
   * enviando uma mensagem 
  */
  const waveTxn = await waveContract.wave("Hello world ;)");
  await waveTxn.wait();
  
 
  /*
  * Recupera o saldo do contrato para verificar o que aconteceu!
  */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.target);
  console.log(
      "Saldo do contrato:",
      hre.ethers.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});