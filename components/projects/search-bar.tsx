import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon, SlidersHorizontalIcon } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  count: number;
}

export function SearchBar({ query, setQuery, count }: SearchBarProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects by name, description, or technology..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9 retro-input"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Found {count} project{count !== 1 ? 's' : ''}
        </p>
        <Button 
          variant="ghost" 
          size="sm"
          className="md:hidden"
        >
          <SlidersHorizontalIcon className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  );
}