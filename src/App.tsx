import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3Modal from 'web3modal';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnectProvider from '@walletconnect/web3-provider';

require('dotenv').config();

const INFURA_ID = process.env.REACT_APP_FLEEK_KEY;
const NETWORK_NAME = 'mainnet';
 
const web3Modal:Web3Modal = new Web3Modal({
  network: NETWORK_NAME,
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        INFURA_ID
      }
    }
  }
});

export default function App() {
  const [injectedProvider, setInjectedProvider] = useState<Web3Provider>();
  const modalButton = [];

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider(); 
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new Web3Provider(provider));

    provider.on('chainChanged', () => {
      setInjectedProvider(new Web3Provider(provider));
    });

    provider.on('accountsChanged', () => {
      setInjectedProvider(new Web3Provider(provider));
    });
 
    provider.on('disconnect', (code:string, reason:string) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [setInjectedProvider]);

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButton.push(
        <button key="logoutbutton" className="App-link" onClick={logoutOfWeb3Modal}>
          Disconnect Wallet
        </button>
      );
    } else {
      modalButton.push(
        <button key="loginbutton" className="App-link" onClick={loadWeb3Modal}>
          Connect Wallet
        </button>
      );
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {modalButton}
      </header>
    </div>
  );
}

 
