# Vercel Deployment Guide for Bridge Code DAO

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Instructions

### 1. Prepare the Repository

Ensure all changes are committed and pushed to GitHub:
```bash
git add .
git commit -m "feat: Add FHE-encrypted DAO with wallet integration"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import the `JasonPerry1/bridge-code-dao` repository
5. Click "Import"

### 3. Configure Build Settings

Vercel should auto-detect the project settings, but verify:
- **Framework Preset**: Vite
- **Root Directory**: `./` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Set Environment Variables

In the Vercel dashboard, go to Project Settings > Environment Variables and add:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

**Important**: Set these for all environments (Production, Preview, Development).

### 5. Deploy

1. Click "Deploy" button
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### 6. Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued

## Post-Deployment Configuration

### 1. Update Contract Address

After deploying your smart contract to Sepolia:
1. Go to Vercel dashboard > Environment Variables
2. Add `NEXT_PUBLIC_CONTRACT_ADDRESS` with your deployed contract address
3. Redeploy the application

### 2. Test the Application

1. Visit your deployed URL
2. Connect a wallet (MetaMask, WalletConnect, etc.)
3. Ensure you're on Sepolia testnet
4. Test the DAO functionality

## Troubleshooting

### Build Failures

If the build fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Wallet Connection Issues

1. Verify environment variables are set correctly
2. Check that WalletConnect Project ID is valid
3. Ensure RPC URL is accessible

### Contract Integration

1. Deploy the smart contract to Sepolia testnet
2. Update the contract address in environment variables
3. Redeploy the frontend

## Monitoring

- Check Vercel dashboard for deployment status
- Monitor build logs for any errors
- Use Vercel Analytics for performance insights

## Security Notes

- Never commit `.env` files to the repository
- Use environment variables for all sensitive configuration
- Regularly rotate API keys and tokens
- Monitor for any security vulnerabilities in dependencies

## Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Review build logs in Vercel dashboard
- Contact support through Vercel dashboard

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Documentation](https://wagmi.sh/)
