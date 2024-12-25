
import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if ('solana' in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        try {
          const response = await provider.connect();
          setWalletAddress(response.publicKey.toString());
        } catch (err) {
          console.error('Wallet connection failed:', err);
        }
      }
    } else {
      alert('Please install Phantom Wallet!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
