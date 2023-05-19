// https://eth-sepolia.g.alchemy.com/v2/yILfJ17CBfMRULKgOh-N4ZhiArs_SOqI

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/yILfJ17CBfMRULKgOh-N4ZhiArs_SOqI",
      accounts: [
        "f6065a1f37dc32cfa520af87a55856ffe21fdd30eb6d3e7bf006cc76b0c89cc0",
      ],
    },
  },
};
