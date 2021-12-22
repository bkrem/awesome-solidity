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
    <a href="https://gitcoin.co/grants/3371/awesome-solidity">
      <img alt="support via gitcoin badge" src="https://img.shields.io/badge/Support%20via-GitCoin-purple">
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
  - [Atom](#atom)
  - [Eclipse](#eclipse)
  - [Emacs](#emacs)
  - [IntelliJ](#intellij)
  - [Sublime](#sublime)
  - [Vim](#vim)
  - [Visual Studio Code](#visual-studio-code)
- [License](#license)

## Resources

#### Official

- [Docs](https://docs.soliditylang.org/en/latest/) - Official documentation.
- [Cheatsheet](https://docs.soliditylang.org/en/latest/cheatsheet.html) - Cheatsheet from the official docs.
- [Ethereum Wiki](https://github.com/ethereum/wiki/wiki) - The Ethereum Wiki.
- [Ethereum Stackexchange](https://ethereum.stackexchange.com/) - Ethereum's Stackexchange board.
- [Gitter](https://gitter.im/ethereum/solidity/) - Gitter channel.
- [ethereum/solidity](https://github.com/ethereum/solidity/) - Source code.
- [ethereum/solc-bin](https://github.com/ethereum/solc-bin) - Current and historical builds of the compiler.
- [ethereum/solidity-examples](https://github.com/ethereum/solidity-examples) - Loose collection of example code.

#### Tutorials

- [buildspace.so](https://buildspace.so/) - Hands-on Web3 course especially for beginners. It is completely free and you get an NFT on completion.
- [androlo/solidity-workshop](https://github.com/androlo/solidity-workshop) - Comprehensive series of tutorials covering contract-oriented programming and advanced language concepts.
- [CryptoZombies](https://cryptozombies.io) - Interactive code school that teaches you to write smart contracts through building your own crypto-collectibles game.
- [cryptodevhub.io](https://cryptodevhub.io/) - Community-driven effort to unite like-minded people interested in Blockchain- and Crypto Technologies.
- [Discover Ethereum & Solidity (ludu.co)](https://www.ludu.co/course/ethereum) - Complete course that takes you through the process of creating a decentralized Twitter clone using best practices.
- [ExtropyIO/defi-bot](https://github.com/ExtropyIO/defi-bot) - Tutorial for building DeFi arbitrage bots.
- [karmacoma-eth/sending-ether-cheat-sheet](https://gist.github.com/karmacoma-eth/4f206a46dedc6da6808c1ccdef3262d0) - Tips and best practices for sending Ether.
- [LearnXInY](https://learnxinyminutes.com/docs/solidity/) - Learn Solidity in 15 mins (for experienced devs).
- [manojpramesh/solidity-cheatsheet](https://github.com/manojpramesh/solidity-cheatsheet) - Cheat sheet and best practices.
- [Questbook](https://www.questbook.app/) - Questbook is building a University DAO where learning is always free. Starting with crypto-dev courses by leading devs.
- [Solidity and Vyper cheat sheet](https://reference.auditless.com/cheatsheet) - Review syntax of both languages side-by-side.
- [topmonks/solidity_quick_ref](https://topmonks.github.io/solidity_quick_ref/) - Syntax overview.
- [willitscale/learning-solidity](https://github.com/willitscale/learning-solidity) - Complete guide on getting started, creating your own crypto, ICOs and deployment.
- [useweb3.xyz/tutorials](https://www.useweb3.xyz/tutorials) - A curated list of free, community tutorials that are based around specific projects, tasks or challenges.

#### Articles

- [Best Practices for Smart Contract Development (yos.io, Yos Riady, 2019)](https://yos.io/2019/11/10/smart-contract-development-best-practices/) - Developer handbook for smart contract developers.
- [Clean Contracts (wslyvh.com, Wesley van Heije, 2020)](https://www.wslyvh.com/clean-contracts/) - Developer guide to writing clean smart contract code.
- [The Complete Guide to Full Stack Ethereum Development (dev.to, Nader Dabit, 2021)](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13) - Building Full Stack dApps with React, Ethers.js, Solidity, and Hardhat.
- [How to create an ERC20 Token and a Solidity Vendor Contract (medium.com, Emanuele Ricci, 2021)](https://stermi.medium.com/how-to-create-an-erc20-token-and-a-solidity-vendor-contract-to-sell-buy-your-own-token-8882808dd905) - Create your own ERC20 Token and a Token Vendor Contract that will handle the sell/buy process.
- [soliditydeveloper.com/blog](https://soliditydeveloper.com/blog) - Concepts, guides, design patterns and more.

#### Security

- [Capture the Ether](https://capturetheether.com/) - Game in which you hack Ethereum smart contracts to learn about security.
- [crytic/awesome-ethereum-security](https://github.com/crytic/awesome-ethereum-security) - Curated list of awesome Ethereum security references, guidance, tools, and more.
- [crytic/building-secure-contracts](https://github.com/crytic/building-secure-contracts) - Guidelines and training material to write secure smart contracts.
- [crytic/not-so-smart-contracts](https://github.com/crytic/not-so-smart-contracts) - Examples of common vulnerabilities, including code from real smart contracts.
- [Crypto-Virus/cream-finance-exploit-example](https://github.com/Crypto-Virus/cream-finance-exploit-example) - Example implementation of the Cream Finance flashloan exploit.
- [d-xo/weird-erc20](https://github.com/d-xo/weird-erc20) - Minimal example implementations of ERC20 tokens with surprising/unexpected behaviour.
- [Ethereum Smart Contract Security Best Practices (Consensys)](https://consensys.github.io/smart-contract-best-practices/) - General security philosophy, known attacks, and sample code.
- [OriginProtocol/security](https://github.com/OriginProtocol/security) - Materials related to security: docs, checklists, processes.
- [Rari-Capital/security-checklist](https://github.com/Rari-Capital/security-checklist) - Opinionated security and code quality checklist for smart contracts.
- [sigp/solidity-security-blog](https://github.com/sigp/solidity-security-blog) - Comprehensive list of known attack vectors and common anti-patterns.

#### Examples

##### Educational

- [cyrusadkisson/solidity-baby-steps](https://github.com/cyrusadkisson/solidity-baby-steps) - Comprehensive collection of contract examples.
- [flashbots/simple-arbitrage](https://github.com/flashbots/simple-arbitrage) - Example arbitrage bot using Flashbots.
- [fravoll/solidity-patterns](https://github.com/fravoll/solidity-patterns) - A collection of patterns and best practices for smart contract development.
- [libevm/subway](https://github.com/libevm/subway) - A practical example on how to perform sandwich attacks on Ethereum.
- [lsaether/bonding-curves](https://github.com/lsaether/bonding-curves) - Smart contracts for bonding curves (aka curve bonded tokens).
- [kauri.io](https://kauri.io/) - Archive of kauri community's content created with the goal to foster the spread of Ethereum development knowledge far and wide.
- [miguelmota/solidity-idiosyncrasies](https://github.com/miguelmota/solidity-idiosyncrasies) - Common gotchas, pitfalls, limitations, and idiosyncrasies.
- [pedrobergamini/flashloaner-contract](https://github.com/pedrobergamini/flashloaner-contract) - Smart contracts that operate arbitrages between Sushiswap and Uniswap.
- [raineorshine/solidity-by-example](https://github.com/raineorshine/solidity-by-example) - A collection of short yet fully-functional contracts that demonstrate language features.
- [Solidity By Example](https://solidity-by-example.org/) - An introduction to the language with simple examples.
- [useWeb3 - Learn web3 development](https://www.useweb3.xyz/) - A curated overview of the best and latest resources on Ethereum, Solidity and Web3 development.

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
- [Synthetixio/synthetix](https://github.com/Synthetixio/synthetix) - Synthetix smart contracts.
- [trusttoken/smart-contracts](https://github.com/trusttoken/smart-contracts) - TrustToken smart contracts.
- [Uniswap/uniswap-v3-core](https://github.com/Uniswap/uniswap-v3-core) - Core smart contracts of Uniswap v3.
- [wyvernprotocol/wyvern-v3](https://github.com/wyvernprotocol/wyvern-v3) - Core smart contracts for Wyvern v3, a decentralized digital asset exchange protocol.

#### Templates

- [austintgriffith/scaffold-eth](https://github.com/austintgriffith/scaffold-eth) - Github template providing an Ethereum dev stack focused on fast product iterations.
- [ethereum-boilerplate/ethereum-boilerplate](https://github.com/ethereum-boilerplate/ethereum-boilerplate) - React components and hooks to build dApps fast without running your own backend.
- [gakonst/dapptools-template](https://github.com/gakonst/dapptools-template) - Forkable template to get you started with Dapp Tools.
- [NodeFactoryIo/solidity-node-docker-starter](https://github.com/NodeFactoryIo/solidity-node-docker-starter) - Github template with Docker containers for building dApps with Truffle and Node.js as backend server.
- [paulrberg/solidity-template](https://github.com/paulrberg/solidity-template) - Github template for writing contracts (uses: Hardhat, TypeChain, Ethers, Waffle, Solhint, Solcover, Prettier Plugin Solidity).
- [rhlsthrm/typescript-solidity-dev-starter-kit](https://github.com/rhlsthrm/typescript-solidity-dev-starter-kit) - Starter kit for developing, testing, and deploying smart contracts with a full Typescript environment.
- [tomhirst/solidity-nextjs-starter](https://github.com/tomhirst/solidity-nextjs-starter) - A full-stack dApp starter built with Next.js (React).
- [wighawag/template-ethereum-contracts](https://github.com/wighawag/template-ethereum-contracts) - Template to develop smart contracts.
- [ZumZoom/solidity-template](https://github.com/ZumZoom/solidity-template) - Hardhat template with preconfigured Github Actions and Coveralls support.

#### Books

- [Blockchain in Action](https://www.manning.com/books/blockchain-in-action) - Book that teaches the essential principles of blockchain and how to create your own decentralized apps.
- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) - Mastering Ethereum is a book for developers, offering a guide to the operation and use of the Ethereum, Ethereum Classic, RootStock (RSK) and other compatible EVM-based open blockchains.

#### Practice

- [ChainShot](https://www.chainshot.com/) - Hands-on learning with challenging coding tutorials.
- [OpenZeppelin/damn-vulnerable-defi](https://github.com/OpenZeppelin/damn-vulnerable-defi) - A set of challenges to hack implementations of DeFi in Ethereum.
- [OpenZeppelin/ethernaut](https://github.com/OpenZeppelin/ethernaut) - Ethernaut is a Web3/Solidity based wargame to be played in the Ethereum Virtual Machine. Each level is a smart contract that needs to be 'hacked'.

#### Jobs

- [cryptocurrencyjobs.co](https://cryptocurrencyjobs.co/) - Job board for blockchain and cryptocurrency jobs.
- [cryptojobslist.com](https://cryptojobslist.com/) - Job board for blockchain and cryptocurrency jobs.

## Libraries

- [0age/HomeWork](https://github.com/0age/HomeWork) - An autonomous utility for finding, sharing and reusing home addresses for contracts.
- [0xcert/ethereum-erc721](https://github.com/0xcert/ethereum-erc721) - Non-fungible token implementation for Ethereum-based blockchains.
- [alexvansande/ENSTools](https://github.com/alexvansande/ENSTools) - A set of contracts to extend ENS functionality to other smart contracts.
- [Arachnid/solidity-stringutils](https://github.com/Arachnid/solidity-stringutils) - Basic string utilities for Solidity.
- [create-truffle-dapp](https://github.com/clemlak/create-truffle-dapp) - CLI to create and deploy Truffle projects with no configuration.
- [dapp-bin](https://github.com/ethereum/dapp-bin) - Ethereum repo providing implementations for many common data structures and utilities in Solidity, Serpent and LLL.
- [dapp-scratch](https://github.com/okwme/dapp-scratch) - CLI for generating javascript modules from Contracts for Decentralized Apps.
- [dapphub/dappsys](https://github.com/dapphub/dappsys) - Contract system framework for flexible multi-contract dapps.
- [dapphub/dapptools](https://github.com/dapphub/dapptools) - Command-line-friendly tools for blockchain development.
- [dmihal/hardhat-interface-generator](https://github.com/dmihal/hardhat-interface-generator) - Hardhat plugin to automatically generate interfaces from code.
- [EthWorks/Waffle](https://github.com/EthWorks/Waffle) - Library for writing and testing smart contracts.
- [gakonst/foundry](https://github.com/gakonst/foundry) - Blazing fast, portable and modular toolkit for Ethereum application development written in Rust.
- [gelatodigital/auto-top-up](https://github.com/gelatodigital/auto-top-up) - Automatically top up multiple ETH addresses once their ETH balance falls below a certain threshold.
- [hifi-finance/prb-math](https://github.com/hifi-finance/prb-math) - Smart contract library for advanced fixed-point math.
- [instant-dapp-ide](https://github.com/dominicwilliams/instant-dapp-ide) - Complete Dapp and Solidity development environment as a docker image you can run from command line.
- [Keydonix/uniswap-oracle](https://github.com/Keydonix/uniswap-oracle) - General purpose price feed oracle built on Uniswap v2 that uses merkle proofs under the hood.
- [makerdao/multicall](https://github.com/makerdao/multicall) - Aggregate multiple constant function call results into one.
- [maple-labs/erc-20](https://github.com/maple-labs/erc-20) - Maple implementation of the ERC-20 standard.
- [mds1/solidity-trigonometry](https://github.com/mds1/solidity-trigonometry) - Library with basic trigonometry functions.
- [Modular Libraries](https://github.com/modular-network/ethereum-libraries) - Deployed utility libraries to use in your smart contracts.
- [OpenZeppelin](https://openzeppelin.com/) - Framework to build secure smart contracts.
- [OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) - A library for secure smart contract development.
- [OpenZeppelin/openzeppelin-contracts-upgradeable](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable) - Upgradeable variant of OpenZeppelin Contracts, meant for use in upgradeable contracts.
- [optionality/clone-factory](https://github.com/optionality/clone-factory) - Simple clone contract factory. Install a master copy of a contract, then easily (cheaply) create clones with separate state.
- [pcaversaccio/xdeployer](https://github.com/pcaversaccio/xdeployer) - Hardhat plugin to deploy your smart contracts across multiple EVM chains with the same deterministic address.
- [rugpullindex/indexed-sparse-merkle-tree](https://github.com/rugpullindex/indexed-sparse-merkle-tree) - Dapptools-ready and gas-optimized implementation of a sparse merkle tree.
- [Smart Contracts Skeleton](https://github.com/Shimmi/smart-contracts-skeleton) - Preconfigured skeleton repository for building or starting with development of Smart contracts.
- [Solidity Collections](https://github.com/ethereum/wiki/wiki/Solidity-Collections) - Collections of code snippets and utility libraries.
- [Solidity Standard Library](https://github.com/alianse777/solidity-standard-library) - Standard library (Array, random, math, string).
- [solidstate-network/solidstate-solidity](https://github.com/solidstate-network/solidstate-solidity) - Upgradeable-first smart contract development library.
- [studydefi/money-legos](https://github.com/studydefi/money-legos) - NPM package that provides you with the mainnet addresses, ABIs, and Solidity interfaces for popular DeFi protocols.
- [Truffle](https://github.com/trufflesuite/truffle) - Development environment, testing framework and asset pipeline for Ethereum.
- [truffle-assertions](https://github.com/rkalis/truffle-assertions) - Adds additional assertions and utilities used in testing smart contracts with truffle.
- [Rari-Capital/solmate](https://github.com/Rari-Capital/solmate) - Modern, opinionated and gas optimized building blocks for smart contract development.
- [Uniswap/merkle-distributor](https://github.com/Uniswap/merkle-distributor) - Smart contract that distributes a balance of tokens according to a merkle root.
- [Uniswap/uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-periphery) - Peripheral smart contracts for interacting with Uniswap V2.
- [Uniswap/uniswap-v3-periphery](https://github.com/Uniswap/uniswap-v3-periphery) - Peripheral smart contracts for interacting with Uniswap V3.
- [wbobeirne/eth-balance-checker](https://github.com/wbobeirne/eth-balance-checker) - Smart contract and library pair that allows you to check for multiple ERC20 and Ether balances across multiple addresses in a single RPC call.
- [weiroll/weiroll](https://github.com/weiroll/weiroll) - A simple and efficient operation-chaining/scripting language for the EVM.

## Tools

#### General

- [Anish-Agnihotri/MultiFaucet](https://github.com/Anish-Agnihotri/MultiFaucet) - MultiFaucet drips ETH, tokens, and NFTs across many testnet networks, at once.
- [Cryptofex](https://cryptofex.io/download/) - Standalone IDE and compiler.
- [EthFiddle](https://ethfiddle.com/recent_fiddles) - Find, share and embed contracts.
- [eth-brownie/brownie](https://github.com/eth-brownie/brownie) - Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine.
- [Hardhat](https://hardhat.org/) - Development environment to compile, deploy, test, and debug your Ethereum software.
- [Remix](https://remix.ethereum.org/) - Online realtime compiler and runtime.
- [EthereumStudio](https://github.com/ObsidianLabs/EthereumStudio) - Standalone desktop IDE.
- [raineorshine/solidity-repl](https://github.com/raineorshine/solidity-repl) - REPL CLI.
- [SIF](https://github.com/chao-peng/SIF) - Code generation from the AST, analyse and instrument source code.
- [Smart Contract Sanctuary](https://github.com/tintinweb/smart-contract-sanctuary) - A home for ethereum smart contracts, all verified smart contracts from Etherscan.
- [naddison36/sol2uml](https://github.com/naddison36/sol2uml) - Unified Modeling Language (UML) class diagram generator for smart contracts.
- [solgraph](https://github.com/raineorshine/solgraph) - Visualize control flows for smart contract security analysis.
- [sol-merger](https://github.com/RyuuGan/sol-merger) - Merges all imports into single file for contracts.
- [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) - Documentation generator for Solidity projects.
- [Tenderly](https://tenderly.co) - Easily monitor your smart contracts with error tracking, alerting, performance metrics, and detailed contract analytics.
- [tintinweb/solidity-shell](https://github.com/tintinweb/solidity-shell) - An interactive Solidity shell with lightweight session recording.

#### Utility

- [Aniket-Engg/sol-profiler](https://github.com/Aniket-Engg/sol-profiler) - CLI tool to list & store solidity smart contract methods attributes.
- [Aniket-Engg/sol-verifier](https://github.com/Aniket-Engg/sol-verifier) - Verify solidity smart contracts on Etherscan.
- [cleanunicorn/abi2signature](https://github.com/cleanunicorn/abi2signature) - Use the ABI of a smart contract to find out the function signatures.
- [crytic/solc-select](https://github.com/crytic/solc-select) - CLI to quickly switch between compiler versions.
- [duaraghav8/Ethlint](https://github.com/duaraghav8/Ethlint) - Linter to identify and fix style & security issues in Solidity smart contracts.
- [prettier-solidity/prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) - Prettier plugin for automatically formatting your code.
- [protofire/solhint](https://github.com/protofire/solhint) - Solidity linter that provides security, style guide and best practice rules for smart contract validation.
- [rkalis/truffle-plugin-verify](https://github.com/rkalis/truffle-plugin-verify) - Truffle plugin to verify smart contracts on Etherscan from the Truffle command line.
- [sc-forks/solidity-coverage](https://github.com/sc-forks/solidity-coverage) - Code coverage tool.
- [Tenderly/tenderly-cli](https://github.com/Tenderly/tenderly-cli) - Speed up your development with error stack traces.

#### Audit

- [Echidna](https://github.com/crytic/echidna) - Define properties for your smart contract then use fuzzing to catch security bugs.
- [Manticore](https://github.com/trailofbits/manticore) - Detects many common bug types, and can prove correctness properties with symbolic execution.
- [Mythril](https://github.com/ConsenSys/mythril) - Security analysis tool for smart contracts.
- [ethereum/sourcify](https://github.com/ethereum/sourcify) - Re-compiler that can be used to verify that bytecode corresponds to certain source code.
- [eth-sri/securify2](https://github.com/eth-sri/securify2) - Tool for analyzing smart contracts for vulnerabilities and insecure coding.
- [Slither](https://github.com/crytic/slither) - Static analyzer with support for many common bug types, including visualization tools for security-relevant information.
- [MythX](https://mythx.io/) - Detection for security vulnerabilities in Ethereum smart contracts throughout the development life cycle

#### DevOps

- [Embark](https://github.com/embark-framework/embark) - Framework that allows you to easily develop and deploy DApps.
- [Moesif](https://www.moesif.com/docs/platform/ethereum-web3/) - Service that provides Ethereum smart contract analytics and anomaly detection for DApps and DAPIs.

## Languages

#### JavaScript

- [deno-web3/solc](https://github.com/deno-web3/solc) - Solidity bindings for Deno.
- [solc-js](https://github.com/ethereum/solc-js) - JavaScript bindings for the Solidity compiler.
- [solidity-parser](https://github.com/federicobond/solidity-parser-antlr) - Solidity parser built in JavaScript.
- [sulk](https://github.com/lukehedger/sulk) - Configurable contract compilation.

#### TypeScript

- [Soltsice](https://github.com/Soltsice/Soltsice) - Generates strongly-typed TypeScript classes for contracts from Truffle artifacts with a single command.
- [TypeChain](https://github.com/ethereum-ts/TypeChain) - TypeScript bindings for Ethereum smart contracts.

#### Rust

- [hyperledger-labs/solang](https://github.com/hyperledger-labs/solang) - A Solidity-to-WASM-and-BPF compiler written in Rust.
- [rust-ethereum/ethabi](https://github.com/rust-ethereum/ethabi) -Encode and decode smart contract invocations.

#### OCaml

- [ocaml-solidity](https://ocamlpro.github.io/ocaml-solidity/) - OCaml library providing a parser, a typechecker and miscellaneous utilities for manipulating contracts.

## Editor Plugins

#### Atom

- [autocomplete-solidity](https://atom.io/packages/autocomplete-solidity) - Parses Solidity files to give you contextual autocomplete suggestions.
- [Etheratom](https://atom.io/packages/etheratom) - Compile and deploy Solidity code from atom editor.
- [language-ethereum](https://atom.io/packages/language-ethereum) - Adds syntax highlighting and snippets to Solidity and Serpent files in Atom.
- [linter-solidity](https://atom.io/packages/linter-solidity) - Linter.

#### Eclipse

- [uml2solidity](https://github.com/UrsZeidler/uml2solidity) - Model smart contracts with UML.

#### Emacs

- [emacs-solidity](https://github.com/ethereum/emacs-solidity) - Solidity mode for Emacs.
- [company-solidity](https://github.com/ssmolkin1/company-solidity) - Autocomplete with company-mode.

#### IntelliJ

- [intellij-solidity](https://github.com/intellij-solidity/intellij-solidity) - Solidity plugin for IntelliJ.

#### Sublime

- [SublimeEthereum](https://github.com/davidhq/SublimeEthereum) - Solidity syntax for SublimeText.

#### Vim

- [solidity.vim](https://github.com/dmdque/solidity.vim) - Vim compiler plugin.
- [vim-solidity](https://github.com/tomlion/vim-solidity) - Vim syntax file.

#### Visual Studio Code

> 👉 For a comprehensive list, see [results for "Solidity" on Visual Studio Marketplace](https://marketplace.visualstudio.com/search?term=solidity&target=VSCode&category=All%20categories&sortBy=Relevance).

- [sol-profiler-vscode](https://github.com/Aniket-Engg/sol-profiler-vscode) - Visual Code Extension to generate & store smart contract methods profile.
- [vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) - Visual Studio Code language support extension.
- [Solidity Visual Developer](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor) - Visual Security audit, Security centric syntax and semantic highlighting, detailed class outline, UML diagram generator, and many more features.
- [Solidity Contract Flattener](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-flattener) - Flatten Solidity Contracts using truffle-flattener
- [Ethereum Security Bundle](https://marketplace.visualstudio.com/items?itemName=tintinweb.ethereum-security-bundle) - A meta-extension bundling marketplace plugins for secure Ethereum smart contract development.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Ben Kremer](https://github.com/bkrem) has waived all copyright and related or neighboring rights to this work.
