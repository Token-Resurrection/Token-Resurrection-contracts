require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [
        "0xdaca860db90cc24df17fe4554bf831edb07110907dc734d1f741a2e4aa2c6767",
      ],
    },
    basesepolia: {
      url: "https://base-sepolia.blockpi.network/v1/rpc/public",
      accounts: [
        "0xdaca860db90cc24df17fe4554bf831edb07110907dc734d1f741a2e4aa2c6767",
      ],
    },
  },

  etherscan: {
    apiKey: {
      sepolia: "",
      basesepolia: "6JHTJ2RIUFUFUIE5SQS1AXM5BBMVVXHMYI",
    },
    customChains: [
      {
        network: "basesepolia", // Use the same network name as defined in networks
        chainId: 84532, // Replace with the actual chain ID of the mode network
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api", // API URL for the mode network
          browserURL: "https://basescan.org/", // Browser URL for the mode network
        },
      },
    ],
  },
};
