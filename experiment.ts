
import { IndexedTx, StargateClient } from "@cosmjs/stargate"

const rpc = "rpc.sentry-01.theta-testnet.polypore.xyz:26657"

const runAll = async(): Promise<void> => {
    console.log("TODO")

    const client = await StargateClient.connect(rpc)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
    console.log(
            "Alice balances:",
             await client.getAllBalances("cosmos1wjutrcu7zq3wgfl5yqcucqdxfwy5ral2kxpjlq"),
         )
    const hexToBase64 = (hex:string):string => {
        const bytes: number[] = [];
        for (let i = 0; i < hex.length; i += 2) {
            bytes.push(parseInt(hex.substr(i, 2), 16));
        }
        return Buffer.from(bytes).toString('base64');
    };
    const txHashHex = "A131E88E023BEAFF82B1DF39D2303783B434DAA703C68A7ED0ECC5F3EB12ED34";
    const txHashBase64 = hexToBase64(txHashHex);
    console.log(txHashBase64);
    try {
        const faucetTx: IndexedTx = (await client.getTx(txHashBase64))!
        console.log("Faucet Tx:", faucetTx)
    } catch (error) {
        console.error('Error fetching transaction:', error)
    }
}

runAll()