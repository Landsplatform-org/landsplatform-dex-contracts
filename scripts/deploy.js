const main = async () => {
    const transferFactory = await hre.ethers.getContractFactory('TransferTokens')
    const transferContract = await transferFactory.deploy()
  
    await transferContract.deployed()
  
    console.log('TransferToken deployed to:', transferContract.address)
  }
  
  ;(async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
})()