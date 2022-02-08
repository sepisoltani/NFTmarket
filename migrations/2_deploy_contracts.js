const NFT = artifacts.require("NFT");
const NFTMarket = artifacts.require("NFTMarket");

module.exports = async function (deployer) {
  //deploy NFTMarket
  await deployer.deploy(NFTMarket);
  const nftMarket = await NFTMarket.deployed();
  //deplo NFT
  await deployer.deploy(NFT, nftMarket.address);
};
