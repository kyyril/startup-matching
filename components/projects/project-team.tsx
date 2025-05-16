import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from 'lucide-react';
import { TeamMember } from '@/lib/types/types';

interface ProjectTeamProps {
  team: TeamMember[];
}

export function ProjectTeam({ team }: ProjectTeamProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {team.map((member, index) => (
        <Card key={index} className="retro-border">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
              <Avatar className="h-20 w-20">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
                <div className="flex space-x-3 justify-center md:justify-start">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <TwitterIcon className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GithubIcon className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}