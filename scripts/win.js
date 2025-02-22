// add the game address here and update the contract name if necessary
const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    
    // GAME 2
    // await game.setX(41);
    // await game.setY(9);

    // GAME 3
    // const tx = await game.win(45)

    // GAME 4
    // const winningX = 2**8 - 200
    // const tx = await game.win(winningX);

    // GAME 5
    await game.giveMeAllowance(10000);
    await game.mint(10000)
    const tx = await game.win()

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
