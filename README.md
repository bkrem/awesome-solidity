<div align="center">
  <h1 align="center">Awesome Solidity</h1>
  <p align="center">
    <a href="https://github.com/sindresorhus/awesome">
      <img alt="awesome list badge" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg">
    </a>
    <a href="#buildstatus">
      <img alt="build status badge" src="https://github.com/bkrem/awesome-solidity/workflows/URLs/badge.svg">
    </a>
    <a href="https://github.com/bkrem/awesome-solidity/graphs/contributors">
      <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/bkrem/awesome-solidity">
    </a>
    <a href="http://makeapullrequest.com">
      <img alt="pull requests welcome badge" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">
    </a>
  </p>

  <p align="center">A curated list of awesome <a href="https://en.wikipedia.org/wiki/Solidity">Solidity</a> resources, libraries, tools and more.</p>
  <p align="center">Please check the <a href="CONTRIBUTING.md">contribution guidelines</a> for information on formatting and writing pull requests.</p>

</div>

### Contents

- [Resources](#resources)
  - [Official](#official)
  - [Tutorials](#tutorials)
  - [Articles](#articles)
  - [Security](#security)
    - [Audits](#audits)
  - [Examples](#examples)
    - [Educational](#educational)
    - [Deployed on Ethereum Mainnet](#deployed-on-ethereum-mainnet)
  - [Templates](#templates)
  - [Books](#books)
  - [Practice](#practice)
  - [Jobs](#jobs)
- [Libraries](#libraries)
- [Tools](#tools)
  - [General](#general)
  - [Utility](#utility)
  - [Audit](#audit)
  - [DevOps](#devops)
- [Languages](#languages)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [Rust](#rust)
  - [OCaml](#ocaml)
- [Editor Plugins](#editor-plugins)
  - [Eclipse](#eclipse)
  - [Emacs](#emacs)
  - [IntelliJ](#intellij)
  - [Sublime](#sublime)
  - [Vim](#vim)
  - [Visual Studio Code](#visual-studio-code)
- [License](#license)

## Resources

#### Official

- [Cheatsheet](https://docs.soliditylang.org/en/latest/cheatsheet.html) - Cheat sheet from the official docs.
- [Docs](https://docs.soliditylang.org/en/latest/) - Official documentation.
- [Ethereum Stack Exchange](https://ethereum.stackexchange.com/) - Ethereum's Stack Exchange board.
- [ethereum/solc-bin](https://github.com/ethereum/solc-bin) - Current and historical builds of the compiler.
- [ethereum/solidity](https://github.com/ethereum/solidity/) - Source code.
- [ethereum/solidity-examples](https://github.com/ethereum/solidity-examples) - Loose collection of example code.

#### Tutorials

- [buildspace.so](https://buildspace.so/) - Hands-on Web3 course for beginners. Free, with an NFT on completion.
- [cryptodevhub.io](https://cryptodevhub.io/) - Community-driven effort to unite people interested in blockchain and crypto technologies.
- [CryptoZombies](https://cryptozombies.io) - Interactive code school that teaches you to write smart contracts through building your own crypto-collectibles game.
- [Discover Ethereum & Solidity (ludu.co)](https://www.ludu.co/course/ethereum) - Complete course that walks through building a decentralized Twitter clone using best practices.
- [ExtropyIO/defi-bot](https://github.com/ExtropyIO/defi-bot) - Tutorial for building DeFi arbitrage bots.
- [LearnXInY](https://learnxinyminutes.com/docs/solidity/) - Learn the language in 15 minutes (for experienced developers).
- [manojpramesh/solidity-cheatsheet](https://github.com/manojpramesh/solidity-cheatsheet) - Cheat sheet and best practices.
- [nishuzumi/Web3-Enterprise-level-engineering](https://github.com/nishuzumi/Web3-Enterprise-level-engineering) - Web3 Enterprise Engineering Writing Specification Tutorial [Chinese Language - 中文版].
- [Questbook](https://www.questbook.app/) - University DAO offering free crypto-dev courses by leading developers.
- [Solidity and Vyper cheat sheet](https://reference.auditless.com/cheatsheet) - Review both languages side by side.
- [topmonks/solidity_quick_ref](https://topmonks.github.io/solidity_quick_ref/) - Syntax overview.
- [useweb3.xyz/tutorials](https://www.useweb3.xyz/tutorials) - Curated list of free community tutorials built around specific projects, tasks, and challenges.
- [willitscale/learning-solidity](https://github.com/willitscale/learning-solidity) - Complete guide to getting started, creating your own crypto, ICOs, and deployment.
- [WTF Ethers](https://github.com/WTFAcademy/WTF-Ethers) - Open-source, community-reviewed Ethers.js tutorial in Chinese covering intro and advanced topics [Chinese Language - 中文版].
- [WTF Solidity](https://github.com/AmazingAng/WTF-Solidity) - Open-source, community-reviewed tutorial in Chinese and English covering intro, advanced, and application topics.

#### Articles

- [Best Practices for Smart Contract Development (yos.io, Yos Riady, 2019)](https://yos.io/2019/11/10/smart-contract-development-best-practices/) - Developer handbook for smart contract developers.
- [How to create an ERC20 Token and a Solidity Vendor Contract (medium.com, Emanuele Ricci, 2021)](https://stermi.medium.com/how-to-create-an-erc20-token-and-a-solidity-vendor-contract-to-sell-buy-your-own-token-8882808dd905) - Create your own ERC20 token and a vendor contract to handle the sell and buy process.
- [soliditydeveloper.com/blog](https://soliditydeveloper.com/blog) - Concepts, guides, design patterns, and more.
- [The Complete Guide to Full Stack Ethereum Development (dev.to, Nader Dabit, 2021)](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13) - Build full-stack dApps with React, Ethers.js, contracts, and Hardhat.

#### Security

- [Capture the Ether](https://capturetheether.com/) - Game for hacking Ethereum smart contracts and learning security.
- [Crypto-Virus/cream-finance-exploit-example](https://github.com/Crypto-Virus/cream-finance-exploit-example) - Example implementation of the Cream Finance flashloan exploit.
- [crytic/awesome-ethereum-security](https://github.com/crytic/awesome-ethereum-security) - Curated list of Ethereum security references, guidance, tools, and more.
- [crytic/building-secure-contracts](https://github.com/crytic/building-secure-contracts) - Guidelines and training material for writing secure smart contracts.
- [crytic/not-so-smart-contracts](https://github.com/crytic/not-so-smart-contracts) - Examples of common vulnerabilities, including code from real smart contracts.
- [d-xo/weird-erc20](https://github.com/d-xo/weird-erc20) - Minimal example implementations of ERC20 tokens with surprising/unexpected behaviour.
- [Ethereum Smart Contract Security Best Practices (Consensys)](https://consensys.github.io/smart-contract-best-practices/) - General security philosophy, known attacks, and sample code.
- [OriginProtocol/security](https://github.com/OriginProtocol/security) - Materials related to security: docs, checklists, processes.
- [Rari-Capital/security-checklist](https://github.com/Rari-Capital/security-checklist) - Opinionated security and code quality checklist for smart contracts.
- [SecDim](https://secdim.com) - Online edutainment platform with real-world smart contract security content and AppSec games.
- [securing/SCSVS](https://github.com/securing/SCSVS) - Smart Contract Security Verification Standard.
- [sigp/solidity-security-blog](https://github.com/sigp/solidity-security-blog) - Comprehensive list of known attack vectors and common anti-patterns.
- [SunWeb3Sec/DeFiHackLabs](https://github.com/SunWeb3Sec/DeFiHackLabs) - Reproduce DeFi hack incidents using Foundry.

##### Audits

- [Arbitrary Execution](https://github.com/arbitraryexecution/publications/tree/main/assessments) - Public security audits by the Arbitrary Execution Team.
- [Code4rena](https://code4rena.com/) - Auditors compete to identify and eliminate high-severity bugs before production.
- [Consensys Diligence](https://consensys.net/diligence/audits/) - Public security audits by the Consensys Diligence Team.
- [Hacken](https://hacken.io/audits/) - Public security audits by the Hacken Team.
- [Immunefi](https://immunefi.com/) - Bug bounty platform focused on blockchain and smart contract security.
- [MixBytes](https://github.com/mixbytes/audits_public) - Public security audits by the MixBytes Team.
- [OpenZeppelin](https://blog.openzeppelin.com/security-audits/) - Public security audits by the OpenZeppelin Security Team.
- [SpearbitDAO](https://github.com/spearbit/portfolio) - Public security audits by the SpearbitDAO Team.
- [Trail of Bits](https://github.com/trailofbits/publications/tree/master/reviews) - Public security audits by the Trail of Bits Team.

#### Examples

##### Educational

- [alephao/solidity-benchmarks](https://github.com/alephao/solidity-benchmarks) - Benchmarks of popular implementations of ERC standards.
- [cyrusadkisson/solidity-baby-steps](https://github.com/cyrusadkisson/solidity-baby-steps) - Comprehensive collection of contract examples.
- [flashbots/simple-arbitrage](https://github.com/flashbots/simple-arbitrage) - Example arbitrage bot using Flashbots.
- [fravoll/solidity-patterns](https://github.com/fravoll/solidity-patterns) - Collection of patterns and best practices for smart contract development.
- [kauri.io](https://kauri.io/) - Archive of kauri community's content created with the goal to foster the spread of Ethereum development knowledge far and wide.
- [libevm/subway](https://github.com/libevm/subway) - Practical example of how to perform sandwich attacks on Ethereum.
- [lsaether/bonding-curves](https://github.com/lsaether/bonding-curves) - Smart contracts for bonding curves (aka curve bonded tokens).
- [m1guelpf/lil-web3](https://github.com/m1guelpf/lil-web3) - Simple, intentionally-limited versions of web3 protocols & apps.
- [miguelmota/solidity-idiosyncrasies](https://github.com/miguelmota/solidity-idiosyncrasies) - Common gotchas, pitfalls, limitations, and idiosyncrasies.
- [pedrobergamini/flashloaner-contract](https://github.com/pedrobergamini/flashloaner-contract) - Smart contracts that operate arbitrages between Sushiswap and Uniswap.
- [raineorshine/solidity-by-example](https://github.com/raineorshine/solidity-by-example) - Collection of short yet fully functional contracts that demonstrate language features.
- [Solidity By Example](https://solidity-by-example.org/) - Introduction to the language with simple examples.
- [useWeb3 - Learn web3 development](https://www.useweb3.xyz/) - Curated overview of the best and latest Ethereum and Web3 development resources.
- [WTF Academy - Web3 Open Academy](https://wtf.academy/) - DApp for learning smart contract development with quizzes and certificates [Chinese Language - 中文版].

##### Deployed on Ethereum Mainnet

- [Abracadabra-money/magic-internet-money](https://github.com/Abracadabra-money/magic-internet-money) - Magic Internet Money (MIM) contracts.
- [andrecronje/rarity](https://github.com/andrecronje/rarity) - D20srd reference implementation.
- [axieinfinity/ronin-smart-contracts](https://github.com/axieinfinity/ronin-smart-contracts) - Axie Infinity Ronin contracts.
- [bancorprotocol/contract-solidity](https://github.com/bancorprotocol/contracts-solidity) - Bancor Protocol contracts.
- [compound-finance/compound-protocol](https://github.com/compound-finance/compound-protocol) - Compound Protocol contracts.
- [dharma-eng/dharma-smart-wallet](https://github.com/dharma-eng/dharma-smart-wallet) - Smart wallet for earning interest on stablecoins while retaining custody of funds, with an added security backstop provided by Dharma Labs.
- [ensdomains/ens-contracts](https://github.com/ensdomains/ens-contracts) - Ethereum Name Service (ENS) contracts.
- [graphprotocol/contracts](https://github.com/graphprotocol/contracts) - Graph Protocol Contracts.
- [OlympusDAO/olympus-contracts](https://github.com/OlympusDAO/olympus-contracts) - OlympusDAO contracts.
- [smartcontractkit/LinkToken](https://github.com/smartcontractkit/LinkToken) - LINK token contracts for the Chainlink Network.
- [sushiswap/kashi-lending](https://github.com/sushiswap/kashi-lending) - Kashi Lending platform contracts.
- [sushiswap/sushiswap](https://github.com/sushiswap/sushiswap) - Sushiswap smart contracts.
- [trusttoken/smart-contracts](https://github.com/trusttoken/smart-contracts) - TrustToken smart contracts.
- [Uniswap/uniswap-v3-core](https://github.com/Uniswap/uniswap-v3-core) - Core smart contracts of Uniswap v3.
- [wyvernprotocol/wyvern-v3](https://github.com/wyvernprotocol/wyvern-v3) - Core smart contracts for Wyvern v3, a decentralized digital asset exchange protocol.

#### Templates

- [ethereum-boilerplate/ethereum-boilerplate](https://github.com/ethereum-boilerplate/ethereum-boilerplate) - React components and hooks to build dApps fast without running your own backend.
- [gakonst/dapptools-template](https://github.com/gakonst/dapptools-template) - Forkable template to get you started with Dapp Tools.
- [NodeFactoryIo/solidity-node-docker-starter](https://github.com/NodeFactoryIo/solidity-node-docker-starter) - GitHub template with Docker containers for building dApps with Truffle and Node.js as a backend server.
- [paulrberg/solidity-template](https://github.com/paulrberg/solidity-template) - GitHub template for writing contracts with Hardhat, TypeChain, Ethers, Waffle, Solhint, Solcover, and a Prettier plugin.
- [rhlsthrm/typescript-solidity-dev-starter-kit](https://github.com/rhlsthrm/typescript-solidity-dev-starter-kit) - Starter kit for developing, testing, and deploying smart contracts with a full TypeScript environment.
- [scaffold-eth/scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2) - Forkable Ethereum dev stack for building dApps, with a Next.js frontend, wagmi hooks and reusable web3 components.
- [tomhirst/solidity-nextjs-starter](https://github.com/tomhirst/solidity-nextjs-starter) - Full-stack dApp starter built with Next.js (React).
- [transmissions11/foundry-template](https://github.com/transmissions11/foundry-template) - Streamlined template for getting started with Foundry and Solmate.
- [wighawag/template-ethereum-contracts](https://github.com/wighawag/template-ethereum-contracts) - Template to develop smart contracts.
- [ZumZoom/solidity-template](https://github.com/ZumZoom/solidity-template) - Hardhat template with preconfigured GitHub Actions and Coveralls support.

#### Books

- [Blockchain in Action](https://www.manning.com/books/blockchain-in-action) - Book that teaches the essential principles of blockchain and how to create your own decentralized apps.
- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) - Mastering Ethereum is a book for developers, offering a guide to the operation and use of the Ethereum, Ethereum Classic, RootStock (RSK) and other compatible EVM-based open blockchains.

#### Practice

- [ChainShot](https://www.chainshot.com/) - Hands-on learning with challenging coding tutorials.
- [OpenZeppelin/damn-vulnerable-defi](https://github.com/OpenZeppelin/damn-vulnerable-defi) - Set of challenges to hack DeFi implementations on Ethereum.
- [OpenZeppelin/ethernaut](https://github.com/OpenZeppelin/ethernaut) - Web3 wargame played in the Ethereum Virtual Machine. Each level is a smart contract that needs to be 'hacked'.
- [Solidity-Challenges](https://github.com/passandscore/solidity-challenges) - Offers a wide range of challenges, from language-specific tasks to exploit-focused scenarios. Contributors are welcome to add new challenges.

#### Jobs

- [aworker.io](https://aworker.io/) - Job board for blockchain and cryptocurrency jobs.
- [cryptocurrencyjobs.co](https://cryptocurrencyjobs.co/) - Job board for blockchain and cryptocurrency jobs.
- [cryptojobslist.com](https://cryptojobslist.com/) - Job board for blockchain and cryptocurrency jobs.
- [web3.career](https://web3.career) - Job board for blockchain and cryptocurrency jobs.
- [web3vacancy.com](https://web3vacancy.com) - Crypto & Web3 job board for builders and crypto teams.

## Libraries

- [0age/AttributeRegistry](https://github.com/0age/AttributeRegistry) - ERC-1616 Attribute Registry standard interface, tests, and implementation.
- [0age/HomeWork](https://github.com/0age/HomeWork) - Autonomous utility for finding, sharing, and reusing home addresses for contracts.
- [0age/Spawner](https://github.com/0age/Spawner) - Spawn EIP 1167 minimal proxies with an included initialization step during contract creation.
- [0xcert/ethereum-erc721](https://github.com/0xcert/ethereum-erc721) - Non-fungible token implementation for Ethereum-based blockchains.
- [alexvansande/ENSTools](https://github.com/alexvansande/ENSTools) - Set of contracts that extends ENS functionality to other smart contracts.
- [Arachnid/solidity-stringutils](https://github.com/Arachnid/solidity-stringutils) - Basic string utilities.
- [dapp-bin](https://github.com/ethereum/dapp-bin) - Ethereum repo providing common data structures and utilities in multiple smart contract languages.
- [dapphub/dappsys](https://github.com/dapphub/dappsys) - Contract system framework for flexible multi-contract dapps.
- [dmihal/hardhat-interface-generator](https://github.com/dmihal/hardhat-interface-generator) - Hardhat plugin to automatically generate interfaces from code.
- [EthWorks/Waffle](https://github.com/EthWorks/Waffle) - Library for writing and testing smart contracts.
- [hifi-finance/prb-math](https://github.com/hifi-finance/prb-math) - Smart contract library for advanced fixed-point math.
- [ItsNickBarry/hardhat-abi-exporter](https://github.com/ItsNickBarry/hardhat-abi-exporter) - Export contract ABIs on compilation via Hardhat.
- [Keydonix/uniswap-oracle](https://github.com/Keydonix/uniswap-oracle) - General purpose price feed oracle built on Uniswap v2 that uses merkle proofs under the hood.
- [makerdao/multicall](https://github.com/makerdao/multicall) - Aggregate multiple constant function call results into one.
- [maple-labs/erc-20](https://github.com/maple-labs/erc-20) - Maple implementation of the ERC-20 standard.
- [mattdf/RingCrypto](https://github.com/mattdf/RingCrypto) - Ring signature related implementations for Ethereum.
- [mds1/solidity-trigonometry](https://github.com/mds1/solidity-trigonometry) - Library with basic trigonometry functions.
- [MerkleBlue/defimath](https://github.com/MerkleBlue/defimath) - Gas-optimized library for DeFi math: Black-Scholes pricing, Greeks, interest rates, and statistics.
- [Modular Libraries](https://github.com/modular-network/ethereum-libraries) - Deployed utility libraries to use in your smart contracts.
- [mzhu25/sol2string](https://github.com/mzhu25/sol2string) - `LibUintToString` library for efficiently converting `uint256` values to strings.
- [NTA-Capital/SolMATe](https://github.com/NTA-Capital/SolMATe) - Libraries for floating-point matrix manipulation, linear algebra operations, and vector math.
- [OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) - Library for secure smart contract development.
- [OpenZeppelin/openzeppelin-contracts-upgradeable](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable) - Upgradeable variant of OpenZeppelin Contracts, meant for use in upgradeable contracts.
- [optionality/clone-factory](https://github.com/optionality/clone-factory) - Simple clone contract factory. Install a master copy of a contract, then easily (cheaply) create clones with separate state.
- [partylikeits1983/num_complex_solidity](https://github.com/partylikeits1983/num_complex_solidity) - Smart contract library for handling complex numbers.
- [pcaversaccio/xdeployer](https://github.com/pcaversaccio/xdeployer) - Hardhat plugin to deploy your smart contracts across multiple EVM chains with the same deterministic address.
- [rugpullindex/indexed-sparse-merkle-tree](https://github.com/rugpullindex/indexed-sparse-merkle-tree) - Dapptools-ready and gas-optimized implementation of a sparse merkle tree.
- [Smart Contracts Skeleton](https://github.com/Shimmi/smart-contracts-skeleton) - Preconfigured skeleton repository for getting started with smart contract development.
- [solana-labs/solana-solidity.js](https://github.com/solana-labs/solana-solidity.js) - Compile, deploy, and use contracts on Solana.
- [Solidity Standard Library](https://github.com/alianse777/solidity-standard-library) - Standard library with array, random, math, and string helpers.
- [solidstate-network/solidstate-solidity](https://github.com/solidstate-network/solidstate-solidity) - Upgradeable-first smart contract development library.
- [studydefi/money-legos](https://github.com/studydefi/money-legos) - NPM package providing mainnet addresses, ABIs, and interfaces for popular DeFi protocols.
- [ThirdWeb/Contracts](https://github.com/thirdweb-dev/contracts) - Pre-built contracts for Token, NFT, Governance and Marketplace from ThirdWeb.
- [transmissions11/solmate](https://github.com/transmissions11/solmate) - Modern, opinionated, and gas-optimized building blocks for smart contract development.
- [truffle-assertions](https://github.com/rkalis/truffle-assertions) - Adds assertions and utilities for testing smart contracts with Truffle.
- [Unicode Ethereum Project](https://github.com/devstein/unicode-eth) - Libraries and contracts for Unicode data, algorithms, and utilities.
- [Uniswap/merkle-distributor](https://github.com/Uniswap/merkle-distributor) - Smart contract that distributes a balance of tokens according to a merkle root.
- [Uniswap/uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-periphery) - Peripheral smart contracts for interacting with Uniswap V2.
- [Uniswap/uniswap-v3-periphery](https://github.com/Uniswap/uniswap-v3-periphery) - Peripheral smart contracts for interacting with Uniswap V3.
- [wbobeirne/eth-balance-checker](https://github.com/wbobeirne/eth-balance-checker) - Smart contract and library pair that allows you to check for multiple ERC20 and Ether balances across multiple addresses in a single RPC call.

## Tools

#### General

- [Anish-Agnihotri/MultiFaucet](https://github.com/Anish-Agnihotri/MultiFaucet) - MultiFaucet drips ETH, tokens, and NFTs across many testnet networks, at once.
- [create-truffle-dapp](https://github.com/clemlak/create-truffle-dapp) - CLI to create and deploy Truffle projects with no configuration.
- [dapp-scratch](https://github.com/okwme/dapp-scratch) - CLI for generating JavaScript modules from contracts for decentralized apps.
- [dapphub/dapptools](https://github.com/dapphub/dapptools) - Command-line-friendly tools for blockchain development.
- [dethcrypto/ethereum-code-viewer](https://github.com/dethcrypto/ethereum-code-viewer) - View the source of deployed Ethereum contracts in VS Code.
- [eagr/sol-repl](https://github.com/eagr/sol-repl) - Lightweight, feature-rich REPL for instant feedback.
- [EthereumStudio](https://github.com/ObsidianLabs/EthereumStudio) - Standalone desktop IDE.
- [EthFiddle](https://ethfiddle.com/recent_fiddles) - Find, share and embed contracts.
- [foundry-rs/foundry](https://github.com/foundry-rs/foundry) - Blazing fast, portable and modular toolkit for Ethereum application development written in Rust.
- [Hardhat](https://hardhat.org/) - Development environment to compile, deploy, test, and debug your Ethereum software.
- [instant-dapp-ide](https://github.com/dominicwilliams/instant-dapp-ide) - Complete dApp development environment as a Docker image you can run from the command line.
- [Laika](https://getlaika.app) - Make requests to smart contracts without the hassle of writing a single line of code.
- [naddison36/sol2uml](https://github.com/naddison36/sol2uml) - Unified Modeling Language (UML) class diagram generator for smart contracts.
- [OpenChainBench](https://openchainbench.com) - Continuous benchmarks for RPC provider latency, stale-state probability, and L1/L2 finality across 20+ EVM chains. Useful for infrastructure selection and integration testing.
- [OpenZeppelin](https://openzeppelin.com/) - Framework to build secure smart contracts.
- [raineorshine/solidity-repl](https://github.com/raineorshine/solidity-repl) - REPL CLI.
- [Remix](https://remix.ethereum.org/) - Online real-time compiler and runtime.
- [SIF](https://github.com/chao-peng/SIF) - Code generation from the AST, analyze and instrument source code.
- [Smart Contract Sanctuary](https://github.com/tintinweb/smart-contract-sanctuary) - Home for Ethereum smart contracts, with verified contracts from Etherscan.
- [sol-merger](https://github.com/RyuuGan/sol-merger) - Merge all imports into a single file for contracts.
- [solgraph](https://github.com/raineorshine/solgraph) - Visualize control flows for smart contract security analysis.
- [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) - Documentation generator for smart contract projects.
- [Sourcify](https://sourcify.dev/) - Decentralized and open-sourced smart contract verification service.
- [Tenderly](https://tenderly.co) - Easily monitor your smart contracts with error tracking, alerting, performance metrics, and detailed contract analytics.
- [Testnet Faucets](https://testnetfaucets.dev) - Directory of testnet faucets across 40+ networks, health-checked daily and verified on-chain, with a free JSON API.
- [tintinweb/solidity-shell](https://github.com/tintinweb/solidity-shell) - Interactive shell with lightweight session recording.
- [Truffle](https://github.com/trufflesuite/truffle) - Development environment, testing framework, and asset pipeline for Ethereum.
- [weiroll/weiroll](https://github.com/weiroll/weiroll) - Simple and efficient operation-chaining/scripting language for the EVM.

#### Utility

- [Aniket-Engg/sol-profiler](https://github.com/Aniket-Engg/sol-profiler) - CLI tool to list and store smart contract method attributes.
- [Aniket-Engg/sol-verifier](https://github.com/Aniket-Engg/sol-verifier) - Verify smart contracts on Etherscan.
- [cleanunicorn/abi2signature](https://github.com/cleanunicorn/abi2signature) - Use the ABI of a smart contract to find out the function signatures.
- [crytic/solc-select](https://github.com/crytic/solc-select) - CLI to quickly switch between compiler versions.
- [DiverseSolutions/Diverse-Eth-Calculator](https://github.com/DiverseSolutions/Diverse-Eth-Calculator) - Website with Ethereum unit conversion & utility components.
- [duaraghav8/Ethlint](https://github.com/duaraghav8/Ethlint) - Linter to identify and fix style & security issues in smart contracts.
- [formo/address-checksum](https://formo.so/tools/address-checksum) - Validate and convert Ethereum and EVM addresses to EIP-55 checksum format.
- [formo/builder-codes](https://formo.so/tools/builder-codes) - Encode, decode, and validate ERC-8021 builder codes for onchain transaction attribution.
- [formo/calldata-decoder](https://formo.so/tools/calldata-decoder) - Decode Ethereum and EVM transaction calldata into readable function calls, selectors, and parameters.
- [formo/siwe](https://formo.so/tools/sign-in-with-ethereum) - Create and inspect EIP-4361 SIWE messages for wallet-based authentication.
- [ItsNickBarry/hardhat-contract-sizer](https://github.com/ItsNickBarry/hardhat-contract-sizer) - Output contract sizes with Hardhat.
- [prettier-solidity/prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) - Prettier plugin for automatically formatting your code.
- [protofire/solhint](https://github.com/protofire/solhint) - Linter that provides security, style guide, and best practice rules for smart contract validation.
- [rkalis/truffle-plugin-verify](https://github.com/rkalis/truffle-plugin-verify) - Truffle plugin to verify smart contracts on Etherscan and Sourcify from the Truffle command line.
- [sambacha/prettier-config-solidity](https://github.com/sambacha/prettier-config-solidity) - Prettier config optimized to reduce AST churn and conform to the language spec.
- [sc-forks/solidity-coverage](https://github.com/sc-forks/solidity-coverage) - Code coverage tool.
- [Tenderly/tenderly-cli](https://github.com/Tenderly/tenderly-cli) - Speed up your development with error stack traces.
- [tintinweb/solgrep](https://github.com/tintinweb/solgrep) - Scriptable semantic grep utility.

#### Audit

- [a16z/metamorphic-contract-detector](https://github.com/a16z/metamorphic-contract-detector) - Check whether a given contract exhibits red flags that could indicate the potential for metamorphism instead of immutability.
- [Aderyn](https://github.com/Cyfrin/aderyn) - Rust-based open-source static analyzer for finding vulnerabilities in smart contracts.
- [Echidna](https://github.com/crytic/echidna) - Define properties for your smart contract then use fuzzing to catch security bugs.
- [eth-sri/securify2](https://github.com/eth-sri/securify2) - Tool for analyzing smart contracts for vulnerabilities and insecure coding.
- [ethereum/sourcify](https://github.com/ethereum/sourcify) - Re-compiler for verifying that bytecode corresponds to specific source code.
- [Manticore](https://github.com/trailofbits/manticore) - Detects many common bug types and can prove correctness properties with symbolic execution.
- [Mythril](https://github.com/ConsenSys/mythril) - Security analysis tool for smart contracts.
- [MythX](https://mythx.io/) - Detect security vulnerabilities in Ethereum smart contracts throughout the development lifecycle.
- [Slither](https://github.com/crytic/slither) - Static analyzer with support for many common bug types, including visualization tools for security-relevant information.

#### DevOps

- [Embark](https://github.com/embark-framework/embark) - Framework that allows you to easily develop and deploy DApps.
- [Moesif](https://www.moesif.com/docs/platform/ethereum-web3/) - Service that provides Ethereum smart contract analytics and anomaly detection for DApps and DAPIs.

## Languages

#### JavaScript

- [deno-web3/solc](https://github.com/deno-web3/solc) - Compiler bindings for Deno.
- [solc-js](https://github.com/ethereum/solc-js) - JavaScript bindings for the compiler.
- [solidity-parser](https://github.com/federicobond/solidity-parser-antlr) - Parser built in JavaScript.
- [sulk](https://github.com/lukehedger/sulk) - Configurable contract compilation.

#### TypeScript

- [Soltsice](https://github.com/Soltsice/Soltsice) - Generates strongly-typed TypeScript classes for contracts from Truffle artifacts with a single command.
- [TypeChain](https://github.com/ethereum-ts/TypeChain) - TypeScript bindings for Ethereum smart contracts.

#### Rust

- [hyperledger-labs/solang](https://github.com/hyperledger-labs/solang) - Compiler targeting WASM and BPF, written in Rust.
- [rust-ethereum/ethabi](https://github.com/rust-ethereum/ethabi) - Encode and decode smart contract invocations.

#### OCaml

- [ocaml-solidity](https://ocamlpro.github.io/ocaml-solidity/) - OCaml library providing a parser, a typechecker and miscellaneous utilities for manipulating contracts.

## Editor Plugins

#### Eclipse

- [uml2solidity](https://github.com/UrsZeidler/uml2solidity) - Model smart contracts with UML.

#### Emacs

- [company-solidity](https://github.com/ssmolkin1/company-solidity) - Autocomplete with company-mode.
- [emacs-solidity](https://github.com/ethereum/emacs-solidity) - Language mode for Emacs.

#### IntelliJ

- [intellij-solidity](https://github.com/intellij-solidity/intellij-solidity) - Language plugin for IntelliJ.

#### Sublime

- [SublimeEthereum](https://github.com/davidhq/SublimeEthereum) - Syntax package for Sublime Text.

#### Vim

- [solidity.vim](https://github.com/dmdque/solidity.vim) - Vim compiler plugin.
- [vim-solidity](https://github.com/tomlion/vim-solidity) - Vim syntax file.

#### Visual Studio Code

> 👉 For a comprehensive list, see [results for "Solidity" on Visual Studio Marketplace](https://marketplace.visualstudio.com/search?term=solidity&target=VSCode&category=All%20categories&sortBy=Relevance).

- [ConsenSys/vscode-solidity-auditor](https://github.com/ConsenSys/vscode-solidity-auditor) - Language support and visual security auditor for Visual Studio Code.
- [Ethereum Security Bundle](https://marketplace.visualstudio.com/items?itemName=tintinweb.ethereum-security-bundle) - Meta-extension bundling marketplace plugins for secure Ethereum smart contract development.
- [sol-profiler-vscode](https://github.com/Aniket-Engg/sol-profiler-vscode) - Visual Studio Code extension for generating and storing smart contract method profiles.
- [Solidity + Hardhat](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) - Adds IDE support for contract development with formatting, linting, snippets, references, and more.
- [Solidity Contract Flattener](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-flattener) - Flatten contracts using `truffle-flattener`.
- [Solidity Visual Developer](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor) - Security-centric syntax and semantic highlighting, detailed class outlines, UML diagram generation, and more.
- [Truffle for VS Code](https://marketplace.visualstudio.com/items?itemName=trufflesuite-csi.truffle-vscode) - Truffle for VS Code simplifies how you create, build, debug and deploy smart contracts on Ethereum and all EVM-compatible blockchains and layer 2 scaling solutions.
- [vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) - Visual Studio Code language support extension.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Ben Kremer](https://github.com/bkrem) has waived all copyright and related or neighboring rights to this work.
