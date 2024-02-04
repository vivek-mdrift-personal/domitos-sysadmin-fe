import { LogOut, Settings, User } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ProfileIcons() {
  return (
    <div className="container flex space-x-1">
      <Button variant="outline" size="icon">
        <User className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <LogOut className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  );
}
