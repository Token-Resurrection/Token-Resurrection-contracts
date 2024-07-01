const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const web3 = require("web3");
// List of addresses
const addresses = [
  "0x324e839ECCe8226DFf17d0056874F53355e43095",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
];

// Hash the addresses
const leaves = addresses.map((addr) => keccak256(addr));

// Create a Merkle tree
const merkleTree = new MerkleTree(leaves, keccak256, {
  sortPairs: true,
  sortLeaves: true,
});

// Get the root of the Merkle tree
const root = merkleTree.getRoot().toString("hex");

// Function to generate Merkle proof for a given address
function getMerkleProof(address) {
  const leaf = keccak256(address);
  console.log(leaf);

  const hexPrrof = merkleTree.getHexProof(keccak256(address));
  // return hexPrrof;
  console.log(hexPrrof);
  const bytesproof = hexArrayToBytes(hexPrrof);
  console.log("bytesproof", bytesproof);
  const PriceHookExtraData = web3.eth.abi.encodeParameters(
    ["bytes32[] finalProof"],
    [hexPrrof]
  );
  console.log("ppppp", PriceHookExtraData);
  return PriceHookExtraData;
}

// Function to convert array of hex strings to bytes
function hexArrayToBytes(hexArray) {
  return "0x" + hexArray.map((hex) => hex).join("");
}

// Example usage
const address = "0x324e839ECCe8226DFf17d0056874F53355e43095";
const proof = getMerkleProof(address);
// const bytesProof = hexArrayToBytes(proof);

console.log(
  merkleTree.verify(
    proof,
    keccak256("0x324e839ECCe8226DFf17d0056874F53355e43095"),
    root
  )
);

console.log("Merkle Root:", root);

console.log("Merkle Proof:", proof);
