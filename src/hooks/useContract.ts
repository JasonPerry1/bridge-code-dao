import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Contract ABI for BridgeCodeDAO
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "string", "name": "_name", "type": "string"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "string", "name": "_repositoryUrl", "type": "string"},
      {"internalType": "uint32", "name": "_fundingTarget", "type": "uint32"},
      {"internalType": "uint256", "name": "_deadline", "type": "uint256"}
    ],
    "name": "createProject",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "projectId", "type": "uint256"},
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "bool", "name": "isAnonymous", "type": "bool"},
      {"internalType": "string", "name": "contributionType", "type": "string"}
    ],
    "name": "contributeToProject",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_title", "type": "string"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "uint256", "name": "_deadline", "type": "uint256"}
    ],
    "name": "createProposal",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "proposalId", "type": "uint256"},
      {"internalType": "bool", "name": "support", "type": "bool"}
    ],
    "name": "castVote",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "projectId", "type": "uint256"}],
    "name": "getProjectInfo",
    "outputs": [
      {"internalType": "string", "name": "name", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "string", "name": "repositoryUrl", "type": "string"},
      {"internalType": "uint32", "name": "fundingTarget", "type": "uint32"},
      {"internalType": "uint32", "name": "currentFunding", "type": "uint32"},
      {"internalType": "uint32", "name": "contributorCount", "type": "uint32"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"},
      {"internalType": "address", "name": "creator", "type": "address"},
      {"internalType": "uint256", "name": "createdAt", "type": "uint256"},
      {"internalType": "uint256", "name": "deadline", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

export const useContract = () => {
  const { address, isConnected } = useAccount();
  const { writeContract, isPending, isSuccess, error } = useWriteContract();
  const [isLoading, setIsLoading] = useState(false);

  // Create encrypted project
  const createProject = async (projectData: {
    name: string;
    description: string;
    repositoryUrl: string;
    fundingTarget: number;
    deadline: number;
  }) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: 'createProject',
        args: [
          projectData.name,
          projectData.description,
          projectData.repositoryUrl,
          projectData.fundingTarget,
          projectData.deadline
        ],
      });
      return hash;
    } catch (err) {
      console.error('Error creating project:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Contribute to project with encrypted data
  const contributeToProject = async (contributionData: {
    projectId: number;
    amount: number;
    isAnonymous: boolean;
    contributionType: string;
  }) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: 'contributeToProject',
        args: [
          contributionData.projectId,
          contributionData.amount,
          contributionData.isAnonymous,
          contributionData.contributionType
        ],
        value: BigInt(contributionData.amount),
      });
      return hash;
    } catch (err) {
      console.error('Error contributing to project:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Create encrypted proposal
  const createProposal = async (proposalData: {
    title: string;
    description: string;
    deadline: number;
  }) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: 'createProposal',
        args: [
          proposalData.title,
          proposalData.description,
          proposalData.deadline
        ],
      });
      return hash;
    } catch (err) {
      console.error('Error creating proposal:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Cast encrypted vote
  const castVote = async (voteData: {
    proposalId: number;
    support: boolean;
  }) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: 'castVote',
        args: [
          voteData.proposalId,
          voteData.support
        ],
      });
      return hash;
    } catch (err) {
      console.error('Error casting vote:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createProject,
    contributeToProject,
    createProposal,
    castVote,
    isLoading,
    isPending,
    isSuccess,
    error,
    isConnected,
    address
  };
};

// Hook for reading contract data
export const useProjectInfo = (projectId: number) => {
  return useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getProjectInfo',
    args: [BigInt(projectId)],
  });
};
