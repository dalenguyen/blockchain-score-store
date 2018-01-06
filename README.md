A blockchain application that helps to save a person's score

# Requirements 

You need to install NPM, testrpc and truffle

```
npm install -g ethereumjs-testrpc truffle
```

# Run this project in development

You need to run testrpc server on your local machine

```
testrpc
```

Add the server to truffle.js in your project

```
networks: {
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
   }
}
```

Then compile and migrate

```
truffle compile
truffle migrate
```

# Test the contract in the console 

Open the console 

```
truffle console
```

Test AddPersonScore function

```
var ss
ScoreStore.deployed().then(function(deployed){ss=deployed;});
ss.AddPersonScore('Dale Nguyen', 10);
```

You will get an error if you try to add this person again 

Test GetScore function 

```
ss.GetScore.call('Dale Nguyen');
```

# Run this project in production 

You need to have an Ethereum RPC Endpoint such as from Azure. Then update the truffile.js file for the production network info. After that, you compile again. 

```
truffle compile
truffle migrate --network production
```

You can also test the project from console 

```
truffle console --network production
```

# Troubleshooting 

If you cannot run the application in production. You may need to unlock the default account from your blockchain server by using ssh command. 

```
geth attach
```

```
personal.unlockAccount(eth.coinbase) // reference to the default account
```

Keep the console open, while trying to migrate again from another terminal. 