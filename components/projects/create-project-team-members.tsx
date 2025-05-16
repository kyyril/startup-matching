'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  GithubIcon, 
  LinkedinIcon, 
  PlusIcon, 
  TrashIcon, 
  TwitterIcon, 
  UserPlusIcon, 
  XIcon 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TeamMember } from '@/lib/types/types';

export function CreateProjectTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      name: 'You (Project Owner)',
      role: 'Founder & CEO',
      bio: 'Add your bio here to introduce yourself to potential investors.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      linkedin: '',
      twitter: '',
      github: ''
    }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newMember, setNewMember] = useState<TeamMember>({
    name: '',
    role: '',
    bio: '',
    avatar: '',
    linkedin: '',
    twitter: '',
    github: ''
  });
  
  const addTeamMember = () => {
    if (newMember.name.trim() && newMember.role.trim()) {
      setTeamMembers([...teamMembers, { ...newMember }]);
      setNewMember({
        name: '',
        role: '',
        bio: '',
        avatar: '',
        linkedin: '',
        twitter: '',
        github: ''
      });
      setIsAdding(false);
    }
  };
  
  const removeTeamMember = (index: number) => {
    if (index === 0) return; // Don't remove the project owner
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };
  
  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value
    };
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Team Members</h3>
        <p className="text-muted-foreground mb-6">
          Showcase your team's expertise and experience to build investor confidence.
        </p>
      </div>
      
      <div className="space-y-6">
        <ScrollArea className="h-[400px] rounded-md border p-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="mb-6 retro-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Input
                      placeholder="Avatar URL"
                      className="max-w-[200px] text-xs retro-input"
                      value={member.avatar}
                      onChange={(e) => updateTeamMember(index, 'avatar', e.target.value)}
                    />
                    
                    {index !== 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeTeamMember(index)}
                        className="text-destructive mt-4"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`name-${index}`}>Name</Label>
                        <Input
                          id={`name-${index}`}
                          placeholder="Full name"
                          value={member.name}
                          onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                          disabled={index === 0} // Can't change project owner name
                          className="retro-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`role-${index}`}>Role</Label>
                        <Input
                          id={`role-${index}`}
                          placeholder="Position/Role"
                          value={member.role}
                          onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                          className="retro-input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor={`bio-${index}`}>Bio</Label>
                      <Textarea
                        id={`bio-${index}`}
                        placeholder="Short bio and background"
                        value={member.bio}
                        onChange={(e) => updateTeamMember(index, 'bio', e.target.value)}
                        rows={3}
                        className="retro-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <LinkedinIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="LinkedIn URL"
                          value={member.linkedin}
                          onChange={(e) => updateTeamMember(index, 'linkedin', e.target.value)}
                          className="retro-input"
                        />
                      </div>
                      <div className="flex items-center">
                        <TwitterIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="Twitter URL"
                          value={member.twitter}
                          onChange={(e) => updateTeamMember(index, 'twitter', e.target.value)}
                          className="retro-input"
                        />
                      </div>
                      <div className="flex items-center">
                        <GithubIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="GitHub URL"
                          value={member.github}
                          onChange={(e) => updateTeamMember(index, 'github', e.target.value)}
                          className="retro-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {isAdding && (
            <Card className="mb-6 retro-border">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Add Team Member</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsAdding(false)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={newMember.avatar} alt="New member" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Input
                      placeholder="Avatar URL"
                      className="max-w-[200px] text-xs retro-input"
                      value={newMember.avatar}
                      onChange={(e) => setNewMember({ ...newMember, avatar: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="new-name">Name *</Label>
                        <Input
                          id="new-name"
                          placeholder="Full name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                          className="retro-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="new-role">Role *</Label>
                        <Input
                          id="new-role"
                          placeholder="Position/Role"
                          value={newMember.role}
                          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                          className="retro-input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="new-bio">Bio</Label>
                      <Textarea
                        id="new-bio"
                        placeholder="Short bio and background"
                        value={newMember.bio}
                        onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                        rows={3}
                        className="retro-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <LinkedinIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="LinkedIn URL"
                          value={newMember.linkedin}
                          onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
                          className="retro-input"
                        />
                      </div>
                      <div className="flex items-center">
                        <TwitterIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="Twitter URL"
                          value={newMember.twitter}
                          onChange={(e) => setNewMember({ ...newMember, twitter: e.target.value })}
                          className="retro-input"
                        />
                      </div>
                      <div className="flex items-center">
                        <GithubIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                        <Input
                          placeholder="GitHub URL"
                          value={newMember.github}
                          onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                          className="retro-input"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button
                        variant="outline"
                        onClick={() => setIsAdding(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={addTeamMember}
                        disabled={!newMember.name.trim() || !newMember.role.trim()}
                        className="retro-button"
                      >
                        Add Member
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {!isAdding && (
            <Button
              variant="outline"
              onClick={() => setIsAdding(true)}
              className="w-full py-8 flex flex-col items-center justify-center border-2 border-dashed border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <UserPlusIcon className="h-8 w-8 mb-2 text-primary/40" />
              <span>Add Team Member</span>
            </Button>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}