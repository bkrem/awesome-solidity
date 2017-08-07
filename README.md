# awesome-solidity [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


A curated list of awesome [Solidity](https://en.wikipedia.org/wiki/Solidity) resources, libraries, tools and more.  

Please check the [contribution guidelines](CONTRIBUTING.md) for info on formatting and writing pull requests.

### Contents
- [Resources](#resources)
    - [Official](#official)
    - [Tutorials](#tutorials)
    - [Examples](#examples)
- [Libraries](#libraries)
- [Tools](#tools)
    - [General](#general)
    - [DevOps](#devops)
    - [JavaScript](#javascript)
    - [Utility](#utility)
    - [Webpack](#webpack)
- [Editor Plugins](#editor-plugins)
    - [Atom](#atom)
    - [Emacs](#emacs)
    - [Sublime](#sublime)
    - [Vim](#vim)
    - [Visual Studio](#visual-studio)
- [Miscellaneous](#miscellaneous)
- [License](#license)


## Resources
#### Official
- [Docs](http://solidity.readthedocs.io/en/latest/) - Official documentation.
    - [FAQ](http://solidity.readthedocs.io/en/latest/frequently-asked-questions.html) - Frequently asked question about Solidity.
- [Ethereum Wiki](https://github.com/ethereum/wiki) - The Ethereum Wiki.
    - [Solidity Features](https://github.com/ethereum/wiki/wiki/Solidity-Features) - A list to explain and demonstrate new Solidity features as soon as they are completed.
- [Ethereum Stackexchange](https://ethereum.stackexchange.com/) - Ethereum's Stackexchange board.
- [Gitter](https://gitter.im/ethereum/solidity/) - Solidity Gitter channel.
- [Solidity Github Repo](https://github.com/ethereum/solidity/) - Solidity source code.

#### Tutorials
- [Monax Smart Contract Tutorial](https://monax.io/docs/tutorials/solidity/) - Tutorial series which begins with a very simple smart contract and teaches how to gradually increase the complexity of your contracts with relevant design patterns.
- [Solidity Workshop](https://github.com/androlo/solidity-workshop) - Comprehensive series of tutorials covering contract-oriented programming and advanced Solidity.
- [Upgradable Contracts](https://blog.colony.io/writing-upgradeable-contracts-in-solidity-6743f0eecc88#.lhsir2mzo) - Medium article on writing upgradable contracts.
- [EthereumDev.io](https://ethereumdev.io) - A complete tutorial from starting to writing complex smart contracts and DApps.

#### Examples
- [DigixDAO contracts](https://github.com/DigixGlobal/digixdao-contracts/tree/master/contracts) - Contracts for DAO-related data structures such as tokens.
- [hello-doug](https://github.com/monax/hello-doug) - Quick Start demo applications using the eris blockchain tooling.
- [slockit/smart-contract](https://github.com/slockit/smart-contract) - Solidity smart contracts for the Slock.it project.
- [Solidity Baby Steps](https://github.com/fivedogit/solidity-baby-steps) - Comprehensive collection of Solidity contract examples.
- [Solidity By Example](http://solidity.readthedocs.io/en/latest/solidity-by-example.html) - Contract examples from the official docs.
- [solidity-examples](https://github.com/chriseth/solidity-examples) - Examples which provide a starting point for data structures such as heaps and queues.


## Libraries
- [dapp-bin](https://github.com/ethereum/dapp-bin) - Ethereum repo providing implementations for many common data structures and utilities in Solidity, Serpent and LLL.
- [dappsys](https://github.com/nexusdev/dappsys) - A solidity contract system framework for flexible multi-contract dapps.
- [instant-dapp-ide](https://github.com/dominicwilliams/instant-dapp-ide) - Complete Dapp and Solidity development environment as a docker image you can run from command line.
- [Solidity Collections](https://github.com/ethereum/wiki/wiki/Solidity-Collections) - A list of collections of Solidity code and utility libraries.
- [Solidity Standard Library](https://github.com/ethereum/wiki/blob/master/Solidity-standard-library.md) - A proof-of-concept for the Solidity standard library.
- [sqlsol](https://github.com/monax/sqlsol) - A solidity event driven SQLite3 cache for syncing with smart contracts.
- [Truffle](https://github.com/ConsenSys/truffle) - Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier.
- [Zeppelin](https://github.com/OpenZeppelin/zeppelin-solidity) - A framework to build secure smart contracts in Solidity.


## Tools
#### General
- [REPL](https://github.com/raineorshine/solidity-repl) - Ethereum Solidity REPL CLI.
- [solgraph](https://github.com/raineorshine/solgraph) - Visualize Solidity control flow for smart contract security analysis.
- [Online Compiler](https://ethereum.github.io/browser-solidity/#version=soljson-latest.js) - Online Solidity realtime compiler and runtime.

#### DevOps
- [Embark](https://iurimatias.github.io/embark-framework/) - A framework that allows you to easily develop and deploy DApps.

#### JavaScript
- [solc-js](https://github.com/ethereum/solc-js) - JavaScript bindings for the Solidity compiler.
- [solidity-parser](https://github.com/ConsenSys/solidity-parser) - Solidity parser built in JavaScript.

#### Utility
- [sol-tester](https://github.com/androlo/sol-tester) - Utilities for building, linking and testing solidity contracts using go-ethereum and the simulated chain.
- [solcover](https://github.com/JoinColony/solcover) - Code coverage for Solidity.
- [ethrain](https://github.com/sebs/ethrain) - Gets you testnet ether without mining.
- [rpc-check](https://github.com/sebs/rpc-check) - Reviews the json rpc interface from "outside".

#### Webpack
- [solidity-loader](https://github.com/jeffscottward/solidity-loader) - Webpack loader for Solidity.

## Editor Plugins
#### Atom
- [autocomplete-solidity](https://atom.io/packages/autocomplete-solidity) - Parses your Solidity files to give you contextual autocomplete suggestions.
- [language-ethereum](https://atom.io/packages/language-ethereum) - Adds syntax highlighting and snippets to Solidity and Serpent files in Atom.
- [linter-solidity](https://atom.io/packages/linter-solidity) - Solidity linter.

#### Emacs
- [emacs-solidity](https://github.com/ethereum/emacs-solidity) - Solidity mode for Emacs.

#### Sublime
- [SublimeEthereum](https://github.com/davidhq/SublimeEthereum) - Ethereum Solidity language syntax for SublimeText.

#### Vim
- [vim-solidity](https://github.com/tomlion/vim-solidity) - Vim syntax file for solidity.

#### Visual Studio
- [vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) - Visual Studio Code language support extension for Solidity.


## Miscellaneous
- [Roulette](https://github.com/retotrinkler/solidity1/tree/master/alpha) - A Solidity contract which emulates the game of Roulette.

---

## License
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Ben Kremer](http://github.com/bkrem) has waived all copyright and related or neighboring rights to this work.
