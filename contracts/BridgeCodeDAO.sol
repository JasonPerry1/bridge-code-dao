// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract BridgeCodeDAO {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct Project {
        euint32 projectId;
        euint32 fundingTarget;
        euint32 currentFunding;
        euint32 contributorCount;
        ebool isActive;
        ebool isVerified;
        string name;
        string description;
        string repositoryUrl;
        address creator;
        uint256 createdAt;
        uint256 deadline;
    }
    
    struct Contribution {
        euint32 contributionId;
        euint32 amount;
        ebool isAnonymous;
        address contributor;
        uint256 timestamp;
        string contributionType; // "code", "funding", "review"
    }
    
    struct Vote {
        euint32 voteId;
        euint32 proposalId;
        ebool support;
        euint32 weight;
        address voter;
        uint256 timestamp;
    }
    
    struct Proposal {
        euint32 proposalId;
        string title;
        string description;
        euint32 forVotes;
        euint32 againstVotes;
        ebool isExecuted;
        address proposer;
        uint256 createdAt;
        uint256 deadline;
    }
    
    mapping(uint256 => Project) public projects;
    mapping(uint256 => Contribution) public contributions;
    mapping(uint256 => Vote) public votes;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => euint32) public memberReputation;
    mapping(address => euint32) public votingPower;
    
    uint256 public projectCounter;
    uint256 public contributionCounter;
    uint256 public voteCounter;
    uint256 public proposalCounter;
    
    address public owner;
    address public verifier;
    euint32 public totalTreasury;
    
    event ProjectCreated(uint256 indexed projectId, address indexed creator, string name);
    event ContributionMade(uint256 indexed contributionId, uint256 indexed projectId, address indexed contributor, uint32 amount);
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, string title);
    event VoteCast(uint256 indexed voteId, uint256 indexed proposalId, address indexed voter, bool support);
    event ProjectVerified(uint256 indexed projectId, bool isVerified);
    event ReputationUpdated(address indexed member, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
        totalTreasury = Fhe.asEuint32(0);
    }
    
    function createProject(
        string memory _name,
        string memory _description,
        string memory _repositoryUrl,
        euint32 _fundingTarget,
        uint256 _deadline
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Project name cannot be empty");
        require(bytes(_repositoryUrl).length > 0, "Repository URL cannot be empty");
        require(_deadline > block.timestamp, "Deadline must be in the future");
        
        uint256 projectId = projectCounter++;
        
        projects[projectId] = Project({
            projectId: _fundingTarget, // Will be set properly
            fundingTarget: _fundingTarget,
            currentFunding: Fhe.asEuint32(0),
            contributorCount: Fhe.asEuint32(0),
            isActive: Fhe.asEbool(true),
            isVerified: Fhe.asEbool(false),
            name: _name,
            description: _description,
            repositoryUrl: _repositoryUrl,
            creator: msg.sender,
            createdAt: block.timestamp,
            deadline: _deadline
        });
        
        emit ProjectCreated(projectId, msg.sender, _name);
        return projectId;
    }
    
    function contributeToProject(
        uint256 projectId,
        euint32 amount,
        ebool isAnonymous,
        string memory contributionType
    ) public payable returns (uint256) {
        require(projects[projectId].creator != address(0), "Project does not exist");
        require(Fhe.decrypt(projects[projectId].isActive), "Project is not active");
        require(block.timestamp <= projects[projectId].deadline, "Project deadline has passed");
        require(msg.value > 0, "Contribution amount must be greater than 0");
        
        uint256 contributionId = contributionCounter++;
        
        contributions[contributionId] = Contribution({
            contributionId: amount, // Will be set properly
            amount: amount,
            isAnonymous: isAnonymous,
            contributor: isAnonymous ? address(0) : msg.sender,
            timestamp: block.timestamp,
            contributionType: contributionType
        });
        
        // Update project totals
        projects[projectId].currentFunding = projects[projectId].currentFunding + amount;
        projects[projectId].contributorCount = projects[projectId].contributorCount + Fhe.asEuint32(1);
        
        // Update treasury
        totalTreasury = totalTreasury + amount;
        
        emit ContributionMade(contributionId, projectId, msg.sender, Fhe.decrypt(amount));
        return contributionId;
    }
    
    function createProposal(
        string memory _title,
        string memory _description,
        uint256 _deadline
    ) public returns (uint256) {
        require(bytes(_title).length > 0, "Proposal title cannot be empty");
        require(bytes(_description).length > 0, "Proposal description cannot be empty");
        require(_deadline > block.timestamp, "Deadline must be in the future");
        require(Fhe.decrypt(memberReputation[msg.sender]) >= 100, "Insufficient reputation to create proposal");
        
        uint256 proposalId = proposalCounter++;
        
        proposals[proposalId] = Proposal({
            proposalId: Fhe.asEuint32(proposalId),
            title: _title,
            description: _description,
            forVotes: Fhe.asEuint32(0),
            againstVotes: Fhe.asEuint32(0),
            isExecuted: Fhe.asEbool(false),
            proposer: msg.sender,
            createdAt: block.timestamp,
            deadline: _deadline
        });
        
        emit ProposalCreated(proposalId, msg.sender, _title);
        return proposalId;
    }
    
    function castVote(
        uint256 proposalId,
        ebool support
    ) public returns (uint256) {
        require(proposals[proposalId].proposer != address(0), "Proposal does not exist");
        require(block.timestamp <= proposals[proposalId].deadline, "Voting deadline has passed");
        require(Fhe.decrypt(memberReputation[msg.sender]) >= 50, "Insufficient reputation to vote");
        
        uint256 voteId = voteCounter++;
        euint32 weight = votingPower[msg.sender];
        
        votes[voteId] = Vote({
            voteId: Fhe.asEuint32(voteId),
            proposalId: Fhe.asEuint32(proposalId),
            support: support,
            weight: weight,
            voter: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update proposal vote counts
        if (Fhe.decrypt(support)) {
            proposals[proposalId].forVotes = proposals[proposalId].forVotes + weight;
        } else {
            proposals[proposalId].againstVotes = proposals[proposalId].againstVotes + weight;
        }
        
        emit VoteCast(voteId, proposalId, msg.sender, Fhe.decrypt(support));
        return voteId;
    }
    
    function verifyProject(uint256 projectId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify projects");
        require(projects[projectId].creator != address(0), "Project does not exist");
        
        projects[projectId].isVerified = isVerified;
        emit ProjectVerified(projectId, Fhe.decrypt(isVerified));
    }
    
    function updateReputation(address member, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(member != address(0), "Invalid member address");
        
        memberReputation[member] = reputation;
        votingPower[member] = reputation / 10; // Voting power is 1/10th of reputation
        
        emit ReputationUpdated(member, Fhe.decrypt(reputation));
    }
    
    function executeProposal(uint256 proposalId) public {
        require(proposals[proposalId].proposer != address(0), "Proposal does not exist");
        require(block.timestamp > proposals[proposalId].deadline, "Voting period has not ended");
        require(!Fhe.decrypt(proposals[proposalId].isExecuted), "Proposal already executed");
        
        euint32 forVotes = proposals[proposalId].forVotes;
        euint32 againstVotes = proposals[proposalId].againstVotes;
        
        // Proposal passes if forVotes > againstVotes
        if (Fhe.decrypt(forVotes) > Fhe.decrypt(againstVotes)) {
            proposals[proposalId].isExecuted = Fhe.asEbool(true);
            // Execute proposal logic here
        }
    }
    
    function getProjectInfo(uint256 projectId) public view returns (
        string memory name,
        string memory description,
        string memory repositoryUrl,
        uint32 fundingTarget,
        uint32 currentFunding,
        uint32 contributorCount,
        bool isActive,
        bool isVerified,
        address creator,
        uint256 createdAt,
        uint256 deadline
    ) {
        Project storage project = projects[projectId];
        return (
            project.name,
            project.description,
            project.repositoryUrl,
            Fhe.decrypt(project.fundingTarget),
            Fhe.decrypt(project.currentFunding),
            Fhe.decrypt(project.contributorCount),
            Fhe.decrypt(project.isActive),
            Fhe.decrypt(project.isVerified),
            project.creator,
            project.createdAt,
            project.deadline
        );
    }
    
    function getContributionInfo(uint256 contributionId) public view returns (
        uint32 amount,
        bool isAnonymous,
        address contributor,
        uint256 timestamp,
        string memory contributionType
    ) {
        Contribution storage contribution = contributions[contributionId];
        return (
            Fhe.decrypt(contribution.amount),
            Fhe.decrypt(contribution.isAnonymous),
            contribution.contributor,
            contribution.timestamp,
            contribution.contributionType
        );
    }
    
    function getProposalInfo(uint256 proposalId) public view returns (
        string memory title,
        string memory description,
        uint32 forVotes,
        uint32 againstVotes,
        bool isExecuted,
        address proposer,
        uint256 createdAt,
        uint256 deadline
    ) {
        Proposal storage proposal = proposals[proposalId];
        return (
            proposal.title,
            proposal.description,
            Fhe.decrypt(proposal.forVotes),
            Fhe.decrypt(proposal.againstVotes),
            Fhe.decrypt(proposal.isExecuted),
            proposal.proposer,
            proposal.createdAt,
            proposal.deadline
        );
    }
    
    function getMemberReputation(address member) public view returns (uint32) {
        return Fhe.decrypt(memberReputation[member]);
    }
    
    function getVotingPower(address member) public view returns (uint32) {
        return Fhe.decrypt(votingPower[member]);
    }
    
    function getTreasuryBalance() public view returns (uint32) {
        return Fhe.decrypt(totalTreasury);
    }
    
    function withdrawFromTreasury(uint256 amount) public {
        require(msg.sender == owner, "Only owner can withdraw from treasury");
        require(amount <= Fhe.decrypt(totalTreasury), "Insufficient treasury balance");
        
        totalTreasury = totalTreasury - Fhe.asEuint32(amount);
        payable(msg.sender).transfer(amount);
    }
}
