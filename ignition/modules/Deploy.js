// deploy.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenResurrectionAttester", (m) => {
  const TokenResurrectionFactoryImplementation = m.contract(
    "TokenResurrectionFactory"
  );

  return {
    TokenResurrectionFactoryImplementation,
  };
});
