
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

interface Post {
  id: string;
  walletAddress: string;
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    console.log('Like action for post:', post.id);
    // TODO: Implement actual like functionality
  };

  const handleComment = () => {
    console.log('Comment action for post:', post.id);
    // TODO: Implement comment functionality
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'now';
    if (diffInHours < 24) return `${diffInHours}h`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {post.username ? post.username[0].toUpperCase() : post.walletAddress[2].toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              {post.username || formatAddress(post.walletAddress)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {formatAddress(post.walletAddress)} · {formatTimestamp(post.timestamp)}
            </p>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="opacity-50 hover:opacity-100">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-foreground mb-4 leading-relaxed">
        {post.content}
      </p>

      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`flex items-center space-x-2 hover:bg-red-50 hover:text-red-600 transition-colors ${
            isLiked ? 'text-red-600' : 'text-muted-foreground'
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          <span>{likesCount}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleComment}
          className="flex items-center space-x-2 hover:bg-blue-50 hover:text-blue-600 transition-colors text-muted-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{post.comments}</span>
        </Button>
      </div>
    </div>
  );
}
