import { loadRemote, init } from '@module-federation/runtime';


async function loadWithESMModule() {
     await init({
        remotes: [
          {
            name: 'MetaMaskStarknetSnapWallet',// <--- this is the name of the remote module
            alias: 'MetaMaskStarknetSnapWallet',
            entry: 'https://s3.eu-central-1.amazonaws.com/dev.snaps.consensys.io/get-starknet/remoteEntry.js',
          },
        ]
      });
      const result = await loadRemote("MetaMaskStarknetSnapWallet/index")
      console.log(result)
      // it will return all the exports from the remote module
      // {
      //   MetaMaskSigner,
      //   MetaMaskAccount,
      //   MetaMaskSnap,
      //   MetaMaskSnapWallet
      // }
      // const { MetaMaskSnapWallet } = result
      // const wallet = new MetaMaskSnapWallet(window['ethereum'])
  }

async function loadWithDefaultExport() {
  await init({
     remotes: [
       {
         name: 'MetaMaskStarknetSnapWallet',// <--- this is the name of the remote module
         alias: 'MetaMaskStarknetSnapWallet',
         entry: 'https://get-starknet.s3.eu-central-1.amazonaws.com/v1/remoteEntry.js',
       },
     ]
   });
   const result = await loadRemote("MetaMaskStarknetSnapWallet/MetaMaskSnapWallet")
   console.log(result.defualt)
   // it will return  the default export from the remote module
   // which is MetaMaskAccount
   // const MetaMaskSnapWallet = result.defualt
   // const wallet = new MetaMaskSnapWallet(window['ethereum'])
}

loadWithESMModule()