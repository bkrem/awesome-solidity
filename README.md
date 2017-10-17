# awesome-solidity [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://travis-ci.org/bkrem/awesome-solidity.svg?branch=master)](https://travis-ci.org/bkrem/awesome-solidity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


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
- [License](#license)


## Resources
#### Official
- [Docs](http://solidity.readthedocs.io/en/latest/) - Official documentation.
    - [FAQ](http://solidity.readthedocs.io/en/latest/frequently-asked-questions.html) - Frequently asked question about Solidity.
- [Ethereum Wiki](https://github.com/ethereum/wiki) - The Ethereum Wiki.
    - [Solidity Features](https://github.com/ethereum/wiki/wiki/Solidity-Features) - List to explain and demonstrate new features as soon as they are completed.
- [Ethereum Stackexchange](https://ethereum.stackexchange.com/) - Ethereum's Stackexchange board.
- [Gitter](https://gitter.im/ethereum/solidity/) - Gitter channel.
- [Solidity Github Repo](https://github.com/ethereum/solidity/) - Source code.

#### Tutorials
- [Monax Smart Contract Tutorial](https://monax.io/docs/tutorials/solidity/) - Tutorial series which begins with a very simple smart contract and teaches how to gradually increase the complexity of your contracts with relevant design patterns.
- [Solidity Workshop](https://github.com/androlo/solidity-workshop) - Comprehensive series of tutorials covering contract-oriented programming and advanced language concepts.
- [Upgradable Contracts](https://blog.colony.io/writing-upgradeable-contracts-in-solidity-6743f0eecc88#.lhsir2mzo) - Medium article on writing upgradable contracts.
- [EthereumDev.io](https://ethereumdev.io) - Complete tutorial from starting to writing complex smart contracts and DApps.

#### Examples
- [DigixDAO contracts](https://github.com/DigixGlobal/digixdao-contracts/tree/master/contracts) - Contracts for DAO-related data structures such as tokens.
- [hello-doug](https://github.com/monax/hello-doug) - Quick Start demo applications using the eris blockchain tooling.
- [slockit/smart-contract](https://github.com/slockit/smart-contract) - Smart contracts for the Slock.it project.
- [Solidity Baby Steps](https://github.com/fivedogit/solidity-baby-steps) - Comprehensive collection of contract examples.
- [Solidity By Example](http://solidity.readthedocs.io/en/latest/solidity-by-example.html) - Contract examples from the official docs.
- [solidity-examples](https://github.com/chriseth/solidity-examples) - Examples which provide a starting point for data structures such as heaps and queues.
- [Solidity idiosyncrasies](https://github.com/miguelmota/solidity-idiosyncrasies) - Common gotchas, pitfalls, limitations, and idiosyncrasies.


## Libraries
- [dapp-bin](https://github.com/ethereum/dapp-bin) - Ethereum repo providing implementations for many common data structures and utilities in Solidity, Serpent and LLL.
- [dappsys](https://github.com/nexusdev/dappsys) - Contract system framework for flexible multi-contract dapps.
- [instant-dapp-ide](https://github.com/dominicwilliams/instant-dapp-ide) - Complete Dapp and Solidity development environment as a docker image you can run from command line.
- [Majoolr Libraries](https://github.com/Majoolr/ethereum-libraries) - Deployed utility libraries to use in your smart contracts.
- [Solidity Collections](https://github.com/ethereum/wiki/wiki/Solidity-Collections) - Collections of code snippets and utility libraries.
- [Solidity Standard Library](https://github.com/ethereum/wiki/blob/master/Solidity-standard-library.md) - Proof-of-concept for standard library.
- [sqlsol](https://github.com/monax/sqlsol) - Event-driven SQLite3 cache for syncing with smart contracts.
- [Truffle](https://github.com/ConsenSys/truffle) - Development environment, testing framework and asset pipeline for Ethereum.
- [Zeppelin](https://github.com/OpenZeppelin/zeppelin-solidity) - Framework to build secure smart contracts.


## Tools
#### General
- [REPL](https://github.com/raineorshine/solidity-repl) - REPL CLI.
- [solgraph](https://github.com/raineorshine/solgraph) - Visualize control flows for smart contract security analysis.
- [Online Compiler](https://ethereum.github.io/browser-solidity/#version=soljson-latest.js) - Online realtime compiler and runtime.

#### DevOps
- [Embark](https://iurimatias.github.io/embark-framework/) - Framework that allows you to easily develop and deploy DApps.

#### JavaScript
- [solc-js](https://github.com/ethereum/solc-js) - JavaScript bindings for the Solidity compiler.
- [solidity-parser](https://github.com/ConsenSys/solidity-parser) - Solidity parser built in JavaScript.
- [sulk](https://github.com/lukehedger/sulk) - Configurable contract compilation.

#### Utility
- [solhint](https://github.com/tokenhouse/solhint) - Solidity linter that provides security, style guide and best practice rules for smart contract validation.
- [sol-tester](https://github.com/androlo/sol-tester) - Utilities for building, linking and testing contracts using go-ethereum and the simulated chain.
- [solcover](https://github.com/JoinColony/solcover) - Code coverage tool.
- [ethrain](https://github.com/sebs/ethrain) - Gets you testnet ether without mining.
- [rpc-check](https://github.com/sebs/rpc-check) - Reviews the json rpc interface from "outside".

#### Webpack
- [solidity-loader](https://github.com/jeffscottward/solidity-loader) - Webpack loader.

## Editor Plugins
#### Atom
- [autocomplete-solidity](https://atom.io/packages/autocomplete-solidity) - Parses Solidity files to give you contextual autocomplete suggestions.
- [language-ethereum](https://atom.io/packages/language-ethereum) - Adds syntax highlighting and snippets to Solidity and Serpent files in Atom.
- [linter-solidity](https://atom.io/packages/linter-solidity) - Linter.

#### Emacs
- [emacs-solidity](https://github.com/ethereum/emacs-solidity) - Solidity mode for Emacs.

#### IntelliJ
- [intellij-solidity](https://github.com/intellij-solidity/intellij-solidity) - Solidity plugin for IntelliJ.

#### Sublime
- [SublimeEthereum](https://github.com/davidhq/SublimeEthereum) - Solidity syntax for SublimeText.

#### Vim
- [vim-solidity](https://github.com/tomlion/vim-solidity) - Vim syntax file.

#### Visual Studio
- [vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) - Visual Studio Code language support extension.


---

## License
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Ben Kremer](http://github.com/bkrem) has waived all copyright and related or neighboring rights to this work.
