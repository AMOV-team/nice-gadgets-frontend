import { Github, Linkedin, Send } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

export const ContactsPage: React.FC = ({
  heading = 'AMOV²',
  description = 'We are a strong team capable of solving any problems.',
  members = [
    {
      id: 'member-1',
      name: 'Oleksand Oliferuk',
      role: 'Team Lead & Frontend Developer',
      avatar: '/public/img/OleksandrTM-contacts.png',
      github: '#',
      telegram: '#',
      linkedin: '#',
    },
    {
      id: 'member-2',
      name: 'Vlad Sulyma',
      role: 'Project Manager & Frontend Developer',
      avatar: '/public/img/VladPM-contacts.png',
      github: '#',
      telegram: '#',
      linkedin: '#',
    },
    {
      id: 'member-3',
      name: 'Artem Vikuliev',
      role: 'Frontend Developer',
      avatar: '/public/img/ArtemkaPro-contacts.png',
      github: 'https://github.com/AARON-FOX',
      telegram: 'https://t.me/Air_foxx',
      linkedin: '#',
    },
    {
      id: 'member-4',
      name: 'Max Tovstopiatyi',
      role: 'Frontend Developer',
      avatar: '/public/img/MaxWhySoSerious-contacts.jpg',
      github: 'https://github.com/maxrori228',
      telegram: 'https://t.me/maxrori',
      linkedin: 'https://www.linkedin.com/in/maxrori/',
    },
    {
      id: 'member-5',
      name: 'Vlad Matkosvkyi',
      role: 'Frontend Developer',
      avatar: '/public/img/VladDev-contacts.jpg',
      github: '#',
      telegram: '#',
      linkedin: '#',
    },
  ],
}: Team1Props) => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-h2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="size-[250px] sm:size-[500px] xl:size-[800px]">
                    <AvatarImage
                      src={member.avatar}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-6">
                  <h3 className="mb-1 text-h1 xl:text-h1-lg font-mont font-extrabold">
                    {member.name}
                  </h3>
                  <p className="text-primary text-h3 font-semibold">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-3 sm:gap-5">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Github className="text-muted-foreground size-6 sm:size-10" />
                    </a>
                  )}
                  {member.telegram && (
                    <a
                      href={member.telegram}
                      target="_blank"
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Send className="text-muted-foreground size-6 sm:size-10" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Linkedin className="text-muted-foreground size-6 sm:size-10" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
