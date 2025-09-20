import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useContract } from '@/hooks/useContract';
import { toast } from 'sonner';
import { Loader2, Heart, Lock, Shield } from 'lucide-react';

interface ContributeToProjectProps {
  projectId: number;
  projectName: string;
  onSuccess?: () => void;
}

export const ContributeToProject = ({ projectId, projectName, onSuccess }: ContributeToProjectProps) => {
  const [formData, setFormData] = useState({
    amount: '',
    isAnonymous: false,
    contributionType: 'funding',
    message: ''
  });

  const { contributeToProject, isLoading, isConnected } = useContract();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      const amountInWei = parseFloat(formData.amount) * 1e18; // Convert ETH to wei
      
      const hash = await contributeToProject({
        projectId,
        amount: Math.floor(amountInWei),
        isAnonymous: formData.isAnonymous,
        contributionType: formData.contributionType
      });

      toast.success('Contribution submitted successfully!', {
        description: `Transaction hash: ${hash}`
      });

      // Reset form
      setFormData({
        amount: '',
        isAnonymous: false,
        contributionType: 'funding',
        message: ''
      });

      onSuccess?.();
    } catch (error) {
      console.error('Error contributing to project:', error);
      toast.error('Failed to contribute to project', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Contribute to {projectName}
        </CardTitle>
        <CardDescription>
          Make an encrypted contribution to support this project. Your contribution will be 
          protected by fully homomorphic encryption.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Contribution Amount (ETH)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              placeholder="0.1"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contributionType">Contribution Type</Label>
            <Select 
              value={formData.contributionType} 
              onValueChange={(value) => handleInputChange('contributionType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select contribution type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="funding">💰 Funding</SelectItem>
                <SelectItem value="code">💻 Code Contribution</SelectItem>
                <SelectItem value="review">🔍 Code Review</SelectItem>
                <SelectItem value="documentation">📚 Documentation</SelectItem>
                <SelectItem value="testing">🧪 Testing</SelectItem>
                <SelectItem value="design">🎨 Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Contribution Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Describe your contribution..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isAnonymous"
              checked={formData.isAnonymous}
              onCheckedChange={(checked) => handleInputChange('isAnonymous', checked)}
            />
            <Label htmlFor="isAnonymous" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Anonymous Contribution
            </Label>
          </div>

          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900 dark:text-green-100">
                  Encrypted Contribution
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Your contribution amount and details will be encrypted using FHE, ensuring 
                  privacy while maintaining the ability to verify and audit contributions.
                </p>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || !isConnected}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing Contribution...
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                Submit Encrypted Contribution
              </>
            )}
          </Button>

          {!isConnected && (
            <p className="text-sm text-muted-foreground text-center">
              Please connect your wallet to contribute
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
