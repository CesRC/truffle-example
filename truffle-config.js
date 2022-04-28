/* module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks.
  // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
  // on how to specify configuration options!
  //
  //networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //},
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
 */

// Truffle Develop

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: 5777, // Match any network id
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3
    }
  },
  compilers: {
    solc: {
      version: "^0.8.11"
    }
  }
};

/* // Ganache

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.8.11"
    }
  }
}; */

/* // Geth client

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0x85a1b7ad92c3d354582f9f858e5ff7a6b7a615ce"
    }
  },
  compilers: {
    solc: {
      version: "^0.8.11"
    }
  }
}; */


/* // Infura service

const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require('./config')

module.exports = {

  networks: {
    development: {
      provider: function () {
        return new HDWalletProvider(config.mnemonic, "https://goerli.infura.io/v3/8d51eb643ccd479784b6d420973317ce")
      },
      network_id: 5
    }
  },
  compilers: {
    solc: {
      version: "^0.8.11"
    }
  }
}; */