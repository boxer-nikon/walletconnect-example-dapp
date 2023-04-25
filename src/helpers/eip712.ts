const example = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "verifyingContract", type: "address" },
    ],
    RelayRequest: [
      { name: "target", type: "address" },
      { name: "encodedFunction", type: "bytes" },
      { name: "gasData", type: "GasData" },
      { name: "relayData", type: "RelayData" },
    ],
    GasData: [
      { name: "gasLimit", type: "uint256" },
      { name: "gasPrice", type: "uint256" },
      { name: "pctRelayFee", type: "uint256" },
      { name: "baseRelayFee", type: "uint256" },
    ],
    RelayData: [
      { name: "senderAddress", type: "address" },
      { name: "senderNonce", type: "uint256" },
      { name: "relayWorker", type: "address" },
      { name: "paymaster", type: "address" },
    ],
  },
  domain: {
    name: "GSN Relayed Transaction",
    version: "1",
    chainId: 42,
    verifyingContract: "0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B",
  },
  primaryType: "RelayRequest",
  message: {
    target: "0x9cf40ef3d1622efe270fe6fe720585b4be4eeeff",
    encodedFunction:
      "0xa9059cbb0000000000000000000000002e0d94754b348d208d64d52d78bcd443afa9fa520000000000000000000000000000000000000000000000000000000000000007",
    gasData: { gasLimit: "39507", gasPrice: "1700000000", pctRelayFee: "70", baseRelayFee: "0" },
    relayData: {
      senderAddress: "0x22d491bde2303f2f43325b2108d26f1eaba1e32b",
      senderNonce: "3",
      relayWorker: "0x3baee457ad824c94bd3953183d725847d023a2cf",
      paymaster: "0x957F270d45e9Ceca5c5af2b49f1b5dC1Abb0421c",
    },
  },
};

const example2 = {
  types: {
    Order: [
      {
        name: "trader",
        type: "address",
      },
      {
        name: "side",
        type: "uint8",
      },
      {
        name: "matchingPolicy",
        type: "address",
      },
      {
        name: "collection",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "paymentToken",
        type: "address",
      },
      {
        name: "price",
        type: "uint256",
      },
      {
        name: "listingTime",
        type: "uint256",
      },
      {
        name: "expirationTime",
        type: "uint256",
      },
      {
        name: "fees",
        type: "Fee[]",
      },
      {
        name: "salt",
        type: "uint256",
      },
      {
        name: "extraParams",
        type: "bytes",
      },
    ],
    Fee: [
      {
        name: "rate",
        type: "uint16",
      },
      {
        name: "recipient",
        type: "address",
      },
    ],
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "version",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
      },
    ],
  },
  domain: {
    name: "Blur Exchange",
    version: "1.0",
    chainId: "1",
    verifyingContract: "0x000000000000ad05ccc4f10045630fb830b95127",
  },
  primaryType: "Order",
  message: {
    trader: "0xc7257962127cdb6f40a53c95641aaf1798f218d8",
    side: "1",
    matchingPolicy: "0x0000000000dab4a563819e8fd93dba3b25bc3495",
    collection: "0x9401518f4ebba857baa879d9f76e1cc8b31ed197",
    tokenId: "2612",
    amount: "1",
    paymentToken: "0x0000000000000000000000000000000000000000",
    price: "1200000000000000000",
    listingTime: "1682406977",
    expirationTime: "1682410577",
    fees: [
      {
        rate: "50",
        recipient: "0x0921d663401d11ce92a8b3b7b559b52bb05291c3",
      },
    ],
    salt: "144186508222298081740099404805706323720",
    extraParams: "0x01",
  },
};

export const eip712 = {
  example,
  example2,
};
