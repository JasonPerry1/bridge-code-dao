import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useContract } from '@/hooks/useContract';
import { toast } from 'sonner';
import { Loader2, Plus, Lock } from 'lucide-react';

interface CreateProjectProps {
  onSuccess?: () => void;
}

export const CreateProject = ({ onSuccess }: CreateProjectProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    repositoryUrl: '',
    fundingTarget: '',
    deadline: '',
    isEncrypted: true
  });

  const { createProject, isLoading, isConnected } = useContract();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      const deadline = Math.floor(new Date(formData.deadline).getTime() / 1000);
      const fundingTarget = parseInt(formData.fundingTarget) * 1e18; // Convert to wei
      
      const hash = await createProject({
        name: formData.name,
        description: formData.description,
        repositoryUrl: formData.repositoryUrl,
        fundingTarget,
        deadline
      });

      toast.success('Project created successfully!', {
        description: `Transaction hash: ${hash}`
      });

      // Reset form
      setFormData({
        name: '',
        description: '',
        repositoryUrl: '',
        fundingTarget: '',
        deadline: '',
        isEncrypted: true
      });

      onSuccess?.();
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error('Failed to create project', {
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
          <Plus className="w-5 h-5" />
          Create Encrypted Project
        </CardTitle>
        <CardDescription>
          Create a new project with fully homomorphic encryption for secure, privacy-preserving governance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe your project"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repositoryUrl">Repository URL</Label>
            <Input
              id="repositoryUrl"
              type="url"
              value={formData.repositoryUrl}
              onChange={(e) => handleInputChange('repositoryUrl', e.target.value)}
              placeholder="https://github.com/username/project"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fundingTarget">Funding Target (ETH)</Label>
              <Input
                id="fundingTarget"
                type="number"
                step="0.01"
                min="0"
                value={formData.fundingTarget}
                onChange={(e) => handleInputChange('fundingTarget', e.target.value)}
                placeholder="10.0"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input
                id="deadline"
                type="datetime-local"
                value={formData.deadline}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isEncrypted"
              checked={formData.isEncrypted}
              onCheckedChange={(checked) => handleInputChange('isEncrypted', checked)}
            />
            <Label htmlFor="isEncrypted" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Enable FHE Encryption
            </Label>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100">
                  Encrypted Data Protection
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  All project data, funding amounts, and contributor information will be encrypted using 
                  fully homomorphic encryption, ensuring privacy while maintaining transparency.
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
                Creating Project...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Create Encrypted Project
              </>
            )}
          </Button>

          {!isConnected && (
            <p className="text-sm text-muted-foreground text-center">
              Please connect your wallet to create a project
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
