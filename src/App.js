import logo from './logo.svg';
import './App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

function App() {
  return (
    <div className="App">
      <button onClick={() => provider.enable().then(console.log).then(() => {
        console.log(provider)
        console.log(provider.wc.session)
      })}>enable</button>
    </div>
  );
}

export default App;
