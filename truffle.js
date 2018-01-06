module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
   },   
    production: {
      host: "ethereum-rpc-endpoint", // remove http and port
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
