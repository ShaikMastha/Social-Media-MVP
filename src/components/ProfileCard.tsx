
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAccount } from 'wagmi';
import { Pencil, Check, X } from 'lucide-react';

interface Profile {
  walletAddress: string;
  username: string;
  bio: string;
  profilePicUrl?: string;
}

export function ProfileCard() {
  const { address, isConnected } = useAccount();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    walletAddress: address || '',
    username: 'cryptodev',
    bio: 'Building the future of decentralized social media 🚀',
    profilePicUrl: '',
  });
  
  const [editProfile, setEditProfile] = useState(profile);

  const handleEdit = () => {
    setEditProfile(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
    console.log('Saving profile:', editProfile);
    // TODO: Implement actual profile save functionality
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  if (!isConnected) {
    return (
      <div className="bg-card rounded-xl p-6 border shadow-sm">
        <p className="text-muted-foreground text-center">
          Connect your wallet to view your profile
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-foreground">Your Profile</h2>
        {!isEditing && (
          <Button onClick={handleEdit} variant="outline" size="sm">
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
            {profile.username ? profile.username[0].toUpperCase() : address?.[2]?.toUpperCase()}
          </div>
          
          <div className="flex-1">
            {isEditing ? (
              <Input
                value={editProfile.username}
                onChange={(e) => setEditProfile({ ...editProfile, username: e.target.value })}
                placeholder="Username"
                className="mb-2"
              />
            ) : (
              <h3 className="font-semibold text-lg text-foreground">
                {profile.username || 'Anonymous User'}
              </h3>
            )}
            
            <p className="text-sm text-muted-foreground font-mono">
              {address ? formatAddress(address) : ''}
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
          {isEditing ? (
            <Textarea
              value={editProfile.bio}
              onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              className="min-h-[80px]"
            />
          ) : (
            <p className="text-muted-foreground">
              {profile.bio || 'No bio available'}
            </p>
          )}
        </div>

        {isEditing && (
          <div className="flex space-x-3 pt-4">
            <Button onClick={handleSave} size="sm" className="flex-1">
              <Check className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline" size="sm" className="flex-1">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
