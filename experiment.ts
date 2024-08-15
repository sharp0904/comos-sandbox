import { StargateClient } from "@cosmjs/stargate"

const rpc = "rpc.sentry-01.theta-testnet.polypore.xyz:26657"

const runAll = async(): Promise<void> => {
    console.log("TODO")

    const client = await StargateClient.connect(rpc)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
}

runAll()