import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    bsc: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ['60531f774e86d9e943a2e4e8027428dd0a53307439285cb108b33331d404368e']
    },
  }
};

export default config;
