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