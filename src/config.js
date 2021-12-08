
module.exports = {
    testnet: {  // goerli
        nftCardAddress: '0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff', // goerli nft
        leedoCoinAddress: '0xbC66FB9821A757a684364266Fb856513A189dbF7',  // goerli erc20 (LEEDO)
        leedoVaultAddress: '0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97', // goerli vault
        maticCoinAddress: '0xCa5DdD47F2f321ae54610d20BD29D1ff6F9bAE97', // matic mumbai coin (mapped with goerli coin)
        maticNFTAddress: '0x2E39443148785c9be0d7343799Ed48672381e056', // matic mumbai nft (mapped with goerli vault)
        raffleAddress: "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB", //mainnet
        erc20PredicateAddress: "0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34", // goerli, approve --> transfer & lock
        erc721PredicateAddress: "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b", // goerli, approve --> transfer & lock
        rootChainManagerAddress: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74', // goerli, depostFor callee
        childChainManagerAddress: '0xb5505a6d998549090530911180f38aC5130101c6', // mumbai
        L1ChainID: 5,    // ethereum goerli
        L2ChainID: 80001,   // matic mumbai
        leedoCoinDecimals: 18,
        maticCoinDecimals: 18,
        parentProvider: `https://goerli.infura.io/v3/`,
        maticProvider: `https://rpc-mumbai.maticvigil.com/`,
        leedoFaucetAddress: '0x1C2eB54997aD433D82D41e028eDa71eEcAAd2eE3', // goerli faucet
        leedoBridgeServerAddress: 'https://api.gosquidgame.com/',
    },
    mainnet: {
        nftCardAddress: '0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f', // mainnet nft
        leedoCoinAddress: '0x3eEde143aDb9a80c6a44C63dad76269D33e2C8d1',  // mainnet erc20 (LEEDO)
        leedoVaultAddress: '0x0866f2af4cf0b601A1a2c4eBD56CBB954a1cF004', // mainnet vault
        maticCoinAddress: '', // matic polygon coin (mapped with mainnet coin)
        maticNFTAddress: '', // matic polygon nft (mapped with mainnet vault)
        raffleAddress: "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB", //mainnet
        erc20PredicateAddress: "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf", // mainnet, approve --> transfer & lock
        erc721PredicateAddress: "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD", // mainnet, approve --> transfer & lock
        rootChainManagerAddress: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77', // mainnet, depostFor callee
        childChainManagerAddress: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa', // polygon
        L1ChainID: 1,    // ethereum mainnet
        L2ChainID: 137,   // polygon
        leedoCoinDecimals: 18,
        maticCoinDecimals: 18,
        parentProvider: `https://eth-mainnet.alchemyapi.io/v2/`,
        maticProvider: `https://matic-mainnet.chainstacklabs.com/`,
    },
    abi: {
        // ethereum L1
        SquidNFTABI: [
            "function ownerOf(uint256 tokenId) external view returns (address)",
            "function balanceOf(address owner) external view returns (uint256)",
            "function getGenes(uint256 _tokenId) public view returns (uint8[8])",
            "function getConsonants(uint256 _tokenId) public view returns (string[3])",
            "function getConsonantsIndex(uint256 _tokenId) public view returns (uint8[3])",
            "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)",
            "function tokenURI(uint256 _tokenId) public view returns (string)",
            "function claim() external",
        ],
        LeedoCoinABI: [
            "function approve(address spender, uint256 amount) external returns (bool)",
            "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
            "function transfer(address recipient, uint256 amount) external returns (bool)",
            "function balanceOf(address account) external view returns (uint256)",
            "function totalSupply() external view returns (uint256)",
            "function allowance(address owner, address spender) external view returns (uint256)",
        ],
        RootChainManagerABI: [
            "function depositFor(address user, address rootToken, bytes calldata depositData) external",
        ],
        LeedoFaucetABI: [
            "function tokenAddress() public view returns (address)",
            "function setClaimAmount(uint _claimAmount) external",
            "function claim() external",
            // "function transferOwnership(address _newOwner) external",
        ],
        // matic L2
        MaticNFTABI: [
            "function updateChildChainManager(address newChildChainManagerProxy) external",
            "function withdraw(uint256 tokenId) external",
            "function withdrawBatch(uint256[] calldata tokenIds) external",
            "function ownerOf(uint256 tokenId) external view returns (address)",
            "function balanceOf(address owner) external view returns (uint256)",
            "function getGenes(uint256 _tokenId) public view returns (uint8[8])",
            "function getConsonants(uint256 _tokenId) public view returns (string[3])",
            "function getConsonantsIndex(uint256 _tokenId) public view returns (uint8[3])",
            "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)",
            "function tokenURI(uint256 _tokenId) public view returns (string)",
        ],
        MaticCoinABI: [
            "function approve(address spender, uint256 amount) external returns (bool)",
            "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
            "function transfer(address recipient, uint256 amount) external returns (bool)",
            "function balanceOf(address account) external view returns (uint256)",
            "function totalSupply() external view returns (uint256)",
            "function allowance(address owner, address spender) external view returns (uint256)",
            "function updateChildChainManager(address newChildChainManagerProxy) external",
            "function deposit(address user, bytes calldata depositData) external",
            "function withdraw(uint256 amount) external",
            "event Transfer(address indexed from, address indexed to, uint256 value)",
        ],
    },
}
