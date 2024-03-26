This Repo is to demo how to load the metamask get-starknet module from external


below is the code example

```typescript

const url = {REMOTE_URL}
const exposedModulePath = 'index'
const exposedModuleName = 'MetaMaskStarknetSnapWallet'
importRemote(url, exposedModuleName, exposedModulePath).then(async(result: any) => {
    const { MetaMaskSnapWallet, MetaMaskSnap } = result;

    //get a ethereum provider from window object
    const provider =  await MetaMaskSnap.GetProvider(window);

    //init the metamask snap wallet by giving the provider and version of the snap, '*' means latest version
    const wallet = new MetaMaskSnapWallet(provider, '*');

    //call enable method to return a array of addresses
    const addresses = await wallet.enable();
    console.log("addresses", addresses)

    //call request method to send rpc request to the wallet
    const resp = await wallet.request({
        type: 'wallet_switchStarknetChain',
        params: {
            chainId: '0x534e5f4d41494e',
        },
    });
    console.log("resp", resp)
});

```
