# CosmJS beginner sandbox

Use it to experiment with CosmJS commands.

## Install it

```sh
$ npm install
```

## Run it

```sh
$ npm run experiment
```
## create a test key for accounts command
````npx ts-node generate_mnemonic.ts > testnet.alice.mnemonic.key


## Exercise progression

As you progress with your exercise, you can look at the _solutions_ in their respective branches. Here is how the branches follow each other:

* `master`, start here
* `file-preparation`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/master...file-preparation)
* `with-stargate-client`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/file-preparation...with-stargate-client)
* `with-signing-stargate-client`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/with-stargate-client...with-signing-stargate-client)
* `send-tokens`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/with-signing-stargate-client...send-tokens)
* `send-tokens-local`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/send-tokens...send-tokens-local)