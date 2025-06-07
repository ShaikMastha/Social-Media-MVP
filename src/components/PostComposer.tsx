
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAccount } from 'wagmi';

export function PostComposer() {
  const [content, setContent] = useState('');
  const { isConnected } = useAccount();
  const maxLength = 280;

  const handlePost = () => {
    if (content.trim() && isConnected) {
      console.log('Posting:', content);
      // TODO: Implement actual posting logic
      setContent('');
    }
  };

  if (!isConnected) {
    return (
      <div className="bg-card rounded-xl p-6 border shadow-sm">
        <p className="text-muted-foreground text-center">
          Connect your wallet to start posting
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm">
      <div className="space-y-4">
        <Textarea
          placeholder="What's happening on the blockchain?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[120px] resize-none border-0 focus-visible:ring-0 text-base placeholder:text-muted-foreground"
          maxLength={maxLength}
        />
        
        <div className="flex justify-between items-center">
          <span className={`text-sm ${
            content.length > maxLength * 0.9 
              ? 'text-destructive' 
              : 'text-muted-foreground'
          }`}>
            {content.length}/{maxLength}
          </span>
          
          <Button 
            onClick={handlePost}
            disabled={!content.trim() || content.length > maxLength}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full px-8"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
