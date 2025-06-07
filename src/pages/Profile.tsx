
import { ProfileCard } from '@/components/ProfileCard';
import { WalletConnectButton } from '@/components/WalletConnectButton';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Your Profile</h1>
            <p className="text-slate-300">Manage your decentralized identity</p>
          </div>
          <WalletConnectButton />
        </header>

        <div className="grid gap-6">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
