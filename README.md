<div align="center">
  <h1 align="center">Awesome Solidity</h1>
  <p align="center">
    <a href="https://github.com/sindresorhus/awesome">
      <img alt="awesome list badge" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg">
    </a>
    <a href="#buildstatus">
      <img alt="build status badge" src="https://github.com/bkrem/awesome-solidity/workflows/Build/badge.svg">
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
    - [Security](#security)
    - [Examples](#examples)
    - [Templates](#templates)
    - [Books](#books)
    - [Practice](#practice)
    - [Jobs](#jobs)
- [Libraries](#libraries)
- [Tools](#tools)
    - [General](#general)
    - [Audit](#audit)
    - [DevOps](#devops)
    - [JavaScript](#javascript)
    - [TypeScript](#typescript)
    - [Utility](#utility)
    - [Webpack](#webpack)
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

#### Tutorials

- [Best Practices for Smart Contract Development](https://yos.io/2019/11/10/smart-contract-development-best-practices/) - Developer handbook for smart contract developers.
- [CryptoZombies](https://cryptozombies.io) - Interactive code school that teaches you to write smart contracts through building your own crypto-collectibles game.
- [The Complete Guide to Full Stack Ethereum Development (dev.to)](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13) - Building Full Stack dApps with React, Ethers.js, Solidity, and Hardhat.
- [Discover Ethereum & Solidity](https://www.ludu.co/course/ethereum) - Complete course that takes you through the process of creating a decentralized Twitter clone using best practices.
- [EthereumDev.io](https://ethereumdev.io) - Complete tutorial from starting to writing complex smart contracts and DApps.
- [Learn Solidity](https://github.com/willitscale/learning-solidity) - Complete guide on getting started, creating your own crypto, ICOs and deployment.
- [LearnXInY](https://learnxinyminutes.com/docs/solidity/) - Learn Solidity in 15 mins (for experienced devs).
- [Solidity Workshop](https://github.com/androlo/solidity-workshop) - Comprehensive series of tutorials covering contract-oriented programming and advanced language concepts.
- [Syntax cheat sheet](https://topmonks.github.io/solidity_quick_ref/) - Quick syntax overview.
- [Solidity and Vyper cheat sheet](https://reference.auditless.com/cheatsheet) - Review syntax of both languages side-by-side.
- [Solidity Developer Blog](https://soliditydeveloper.com/blog) - Concepts, guides, design patterns and more.
- [Upgradable Contracts](https://blog.colony.io/writing-upgradeable-contracts-in-solidity-6743f0eecc88#.lhsir2mzo) - Medium article on writing upgradable contracts.

#### Security

- [Awesome Ethereum Security](https://github.com/crytic/awesome-ethereum-security) - Curated list of awesome Ethereum security references, guidance, tools, and more.
- [Capture the Ether](https://capturetheether.com/) - Game in which you hack Ethereum smart contracts to learn about security.
- [Ethereum Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/) - General security philosophy, known attacks, and sample code.
- [Not So Smart Contracts](https://github.com/crytic/not-so-smart-contracts) - Examples of common vulnerabilities, including code from real smart contracts.

#### Examples

- [bancorprotocol/contract-solidity](https://github.com/bancorprotocol/contracts-solidity) - Bancor Protocol Contracts.
- [DigixDAO contracts](https://github.com/DigixGlobal/digixdao-contracts/tree/master/contracts) - Contracts for DAO-related data structures such as tokens.
- [EthFiddle](https://ethfiddle.com/recent_fiddles) - Find, share and embed contracts.
- [wbobeirne/eth-balance-checker](https://github.com/wbobeirne/eth-balance-checker) - Smart contract and library pair that allows you to check for multiple ERC20 and Ether balances across multiple addresses in a single RPC call.
- [raineorshine/solidity-by-example](https://github.com/raineorshine/solidity-by-example) - A collection of short yet fully-functional contracts that demonstrate language features.
- [slockit/smart-contract](https://github.com/slockit/smart-contract) - Smart contracts for the Slock.it project.
- [Solidity Baby Steps](https://github.com/cyrusadkisson/solidity-baby-steps) - Comprehensive collection of contract examples.
- [Solidity By Example](https://solidity-by-example.org/) - An introduction to the language with simple examples.
- [solidity-examples](https://github.com/chriseth/solidity-examples) - Examples which provide a starting point for data structures such as heaps and queues.
- [Solidity idiosyncrasies](https://github.com/miguelmota/solidity-idiosyncrasies) - Common gotchas, pitfalls, limitations, and idiosyncrasies.
- [Synthetixio/synthetix](https://github.com/Synthetixio/synthetix) - Synthetix smart contracts.
- [trusttoken/smart-contracts](https://github.com/trusttoken/smart-contracts) - TrustToken smart contracts.

#### Templates

- [paulrberg/solidity-template](https://github.com/paulrberg/solidity-template) - Github template for writing contracts (uses: Hardhat, TypeChain, Ethers, Waffle, Solhint, Solcover, Prettier Plugin Solidity).

#### Books

- [Blockchain in Action](https://www.manning.com/books/blockchain-in-action) - Book that teaches the essential principles of blockchain and how to create your own decentralized apps.
- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) - Mastering Ethereum is a book for developers, offering a guide to the operation and use of the Ethereum, Ethereum Classic, RootStock (RSK) and other compatible EVM-based open blockchains.

#### Practice

- [ChainShot](https://www.chainshot.com/) - Hands-on learning with challenging coding tutorials.
- [OpenZeppelin/ethernaut](https://github.com/OpenZeppelin/ethernaut) - Ethernaut is a Web3/Solidity based wargame to be played in the Ethereum Virtual Machine. Each level is a smart contract that needs to be 'hacked'.
- [Eth Hole](https://ethhole.com/challenge) - Practice challenges for building portfolio, added to weekly.

#### Jobs

- [Cryptocurrency Jobs](https://cryptocurrencyjobs.substack.com/) - Job board for blockchain jobs and cryptocurrency job.

## Libraries

- [create-truffle-dapp](https://github.com/clemlak/create-truffle-dapp) - CLI to create and deploy Truffle projects with no configuration.
- [dapp-bin](https://github.com/ethereum/dapp-bin) - Ethereum repo providing implementations for many common data structures and utilities in Solidity, Serpent and LLL.
- [DApp development starter](https://github.com/NodeFactoryIo/solidity-node-docker-starter) - Starter repository with Docker containers for building decentralized applications with Truffle and Node.Js as backend server.
- [dapp-scratch](https://github.com/okwme/dapp-scratch) - CLI for generating javascript modules from Contracts for Decentralized Apps.
- [dappsys](https://github.com/dapphub/dappsys) - Contract system framework for flexible multi-contract dapps.
- [DappTools](https://dapp.tools/) - Command-line-friendly tools for blockchain development.
- [instant-dapp-ide](https://github.com/dominicwilliams/instant-dapp-ide) - Complete Dapp and Solidity development environment as a docker image you can run from command line.
- [Modular Libraries](https://github.com/modular-network/ethereum-libraries) - Deployed utility libraries to use in your smart contracts.
- [ocaml-solidity](https://ocamlpro.github.io/ocaml-solidity/) - OCaml library providing a parser, a typechecker and miscellaneous utilities for manipulating contracts.
- [OpenZeppelin](https://openzeppelin.com/) - Framework to build secure smart contracts.
- [Smart Contracts Skeleton](https://github.com/Shimmi/smart-contracts-skeleton) - Preconfigured skeleton repository for building or starting with development of Smart contracts.
- [smartcontractkit/LinkToken](https://github.com/smartcontractkit/LinkToken) - LINK Token Contracts for the Chainlink Network.
- [Solidity Collections](https://github.com/ethereum/wiki/wiki/Solidity-Collections) - Collections of code snippets and utility libraries.
- [Solidity Standard Library](https://github.com/alianse777/solidity-standard-library) - Standard library (Array, random, math, string).
- [studydefi/money-legos](https://github.com/studydefi/money-legos) - NPM package that provides you with the mainnet addresses, ABIs, and Solidity interfaces for popular DeFi protocols.
- [Truffle](https://github.com/trufflesuite/truffle) - Development environment, testing framework and asset pipeline for Ethereum.
- [truffle-assertions](https://github.com/rkalis/truffle-assertions) - Adds additional assertions and utilities used in testing smart contracts with truffle.

## Tools

#### General

- [Cryptofex](https://cryptofex.io/download/) - Standalone IDE and compiler.
- [Hardhat](https://hardhat.org/) - Development environment to compile, deploy, test, and debug your Ethereum software.
- [Remix](https://remix.ethereum.org/) - Online realtime compiler and runtime.
- [raineorshine/solidity-repl](https://github.com/raineorshine/solidity-repl) - REPL CLI.
- [SIF](https://github.com/chao-peng/SIF) - Code generation from the AST, analyse and instrument source code.
- [Smart Contract Sanctuary](https://github.com/tintinweb/smart-contract-sanctuary) - A home for ethereum smart contracts, all verified smart contracts from Etherscan.
- [naddison36/sol2uml](https://github.com/naddison36/sol2uml) - Unified Modeling Language (UML) class diagram generator for smart contracts.
- [solgraph](https://github.com/raineorshine/solgraph) - Visualize control flows for smart contract security analysis.
- [sol-merger](https://github.com/RyuuGan/sol-merger) - Merges all imports into single file for contracts.
- [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) - Documentation generator for Solidity projects.
- [Tenderly](https://tenderly.co) - Easily monitor your smart contracts with error tracking, alerting, performance metrics, and detailed contract analytics.

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

#### JavaScript

- [solc-js](https://github.com/ethereum/solc-js) - JavaScript bindings for the Solidity compiler.
- [solidity-parser](https://github.com/federicobond/solidity-parser-antlr) - Solidity parser built in JavaScript.
- [sulk](https://github.com/lukehedger/sulk) - Configurable contract compilation.

#### TypeScript

- [Soltsice](https://github.com/Soltsice/Soltsice) - Generates strongly-typed TypeScript classes for contracts from Truffle artifacts with a single command.
- [TypeChain](https://github.com/ethereum-ts/TypeChain) - TypeScript bindings for Ethereum smart contracts.

#### Utility

- [solhint](https://github.com/protofire/solhint) - Solidity linter that provides security, style guide and best practice rules for smart contract validation.
- [Ethlint](https://github.com/duaraghav8/Ethlint) - Linter to identify and fix style & security issues in Solidity smart contracts.
- [sol-profiler](https://github.com/Aniket-Engg/sol-profiler) - CLI tool to list & store solidity smart contract methods attributes.
- [sol-tester](https://github.com/androlo/sol-tester) - Utilities for building, linking and testing contracts using go-ethereum and the simulated chain.
- [sol-verifier](https://github.com/Aniket-Engg/sol-verifier) - Verify solidity smart contracts on Etherscan.
- [solidity-coverage](https://github.com/sc-forks/solidity-coverage) - Code coverage tool.
- [truffle-plugin-verify](https://github.com/rkalis/truffle-plugin-verify) - Truffle plugin to verify smart contracts on Etherscan from the Truffle command line.
- [Tenderly CLI](https://github.com/Tenderly/tenderly-cli) - Speed up your development with error stack traces.

#### Webpack

- [solidity-loader](https://github.com/jeffscottward/solidity-loader) - Webpack loader.

## Editor Plugins

#### Atom

- [autocomplete-solidity](https://atom.io/packages/autocomplete-solidity) - Parses Solidity files to give you contextual autocomplete suggestions.
- [Etheratom](https://atom.io/packages/etheratom) - Compile and deploy Solidity code from atom editor.
- [language-ethereum](https://atom.io/packages/language-ethereum) - Adds syntax highlighting and snippets to Solidity and Serpent files in Atom.
- [linter-solidity](https://atom.io/packages/linter-solidity) - Linter.

#### Eclipse

- [uml2solidity](https://github.com/UrsZeidler/uml2solidity) - Model smart contracts with UML.
- [YAKINDU Solidity Tools](https://yakindu.github.io/solidity-ide/) - Features context sensitive code completion and help, code navigation, syntax coloring, built in compiler, quick fixes and templates.

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

- [sol-profiler-vscode](https://github.com/Aniket-Engg/sol-profiler-vscode) - Visual Code Extension to generate & store smart contract methods profile.
- [vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) - Visual Studio Code language support extension.
- [Solidity Visual Auditor](https://github.com/ConsenSys/vscode-solidity-auditor) - Visual Security audit, Security centric syntax and semantic highlighting, detailed class outline, UML diagram generator, and many more features.
- [Solidity Contract Flattener](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-flattener) - Flatten Solidity Contracts using truffle-flattener
- [Ethereum Security Bundle](https://marketplace.visualstudio.com/items?itemName=tintinweb.ethereum-security-bundle) - A meta-extension bundling marketplace plugins for secure Ethereum smart contract development.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Ben Kremer](https://github.com/bkrem) has waived all copyright and related or neighboring rights to this work.
