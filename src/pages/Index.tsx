
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WalletConnectButton } from '@/components/WalletConnectButton';
import { PostComposer } from '@/components/PostComposer';
import { Feed } from '@/components/Feed';
import { Button } from '@/components/ui/button';
import { Home, User, Search, Bell } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DecentSocial
              </h1>
              
              <nav className="hidden md:flex space-x-6">
                <Button
                  variant={activeTab === 'home' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('home')}
                  className="flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Button>
                
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 opacity-50"
                  disabled
                >
                  <Search className="h-4 w-4" />
                  <span>Explore</span>
                </Button>
                
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 opacity-50"
                  disabled
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="outline" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </Link>
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {/* Welcome Section */}
          <div className="text-center py-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Decentralized Future
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Connect your wallet and join the first truly decentralized social media platform. 
              Your data, your content, your control.
            </p>
          </div>

          {/* Post Composer */}
          <PostComposer />

          {/* Feed */}
          <Feed />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
        <div className="flex justify-around py-2">
          <Button
            variant={activeTab === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('home')}
            className="flex flex-col items-center space-y-1 py-3"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 py-3 opacity-50"
            disabled
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">Explore</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 py-3 opacity-50"
            disabled
          >
            <Bell className="h-5 w-5" />
            <span className="text-xs">Notifications</span>
          </Button>
          
          <Link to="/profile">
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center space-y-1 py-3"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Index;
