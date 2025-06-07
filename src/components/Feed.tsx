
import { PostCard } from './PostCard';

// Mock data - will be replaced with real API calls
const mockPosts = [
  {
    id: '1',
    walletAddress: '0x1234567890123456789012345678901234567890',
    username: 'cryptodev',
    content: 'Just deployed my first smart contract! The future of decentralized social media is here 🚀',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 24,
    comments: 8,
    isLiked: false,
  },
  {
    id: '2',
    walletAddress: '0x0987654321098765432109876543210987654321',
    username: 'defi_enthusiast',
    content: 'Web3 social platforms are the future! No more centralized control over our data and content. This is what true digital freedom looks like.',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    likes: 156,
    comments: 32,
    isLiked: true,
  },
  {
    id: '3',
    walletAddress: '0x1111222233334444555566667777888899990000',
    username: '',
    content: 'GM to all the builders in Web3! Another day, another opportunity to decentralize the world 🌍',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    likes: 89,
    comments: 15,
    isLiked: false,
  },
  {
    id: '4',
    walletAddress: '0xaaabbbcccdddeeefffggghhhiiijjjkkklllmmm',
    username: 'blockchain_nomad',
    content: 'The beauty of decentralized social media: your content, your rules, your ownership. No algorithm deciding what you see.',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    likes: 203,
    comments: 67,
    isLiked: false,
  },
];

export function Feed() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground mb-6">Latest Posts</h2>
      
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      
      {mockPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts yet. Be the first to share something!</p>
        </div>
      )}
    </div>
  );
}
