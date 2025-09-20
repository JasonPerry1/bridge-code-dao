# Bridge Code DAO

A decentralized autonomous organization (DAO) platform built with fully homomorphic encryption (FHE) for secure, privacy-preserving governance and project management.

## Features

- **FHE-Encrypted Governance**: All voting and reputation data is encrypted using fully homomorphic encryption
- **Project Management**: Create, fund, and manage open-source projects with encrypted funding tracking
- **Decentralized Voting**: Secure proposal creation and voting with encrypted vote counts
- **Reputation System**: Encrypted reputation tracking for community members
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit

## Technologies

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Blockchain**: Ethereum Sepolia Testnet
- **UI Components**: shadcn/ui, Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JasonPerry1/bridge-code-dao.git
cd bridge-code-dao
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Update the `.env.local` file with your configuration:
```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
```

5. Start the development server:
```bash
npm run dev
```

## Smart Contract

The DAO is powered by a Solidity smart contract with FHE integration:

- **Project Management**: Create and manage open-source projects
- **Encrypted Voting**: Secure proposal creation and voting
- **Reputation System**: Track member contributions and reputation
- **Treasury Management**: Secure fund management with encrypted balances

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@bridgecodedao.com or join our Discord community.
