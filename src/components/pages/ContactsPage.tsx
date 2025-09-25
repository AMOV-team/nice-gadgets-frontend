import { Github, Linkedin, Send } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useTranslation } from 'react-i18next';
import oleskandrTL from '../../../public/img/OleksandrTM-contacts.png';
import vladPM from '../../../public/img/VladPM-contacts.png';
import artem from '../../../public/img/ArtemkaPro-contacts.png';
import max from '../../../public/img/MaxWhySoSerious-contacts.jpg';
import vlad from '../../../public/img/VladDev-contacts.jpg';
import { useLoader } from '@/hooks/useLoader';
import { useEffect } from 'react';

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
  members?: TeamMember[];
}

export const ContactsPage: React.FC<Team1Props> = ({ members }) => {
  const { t } = useTranslation();
  const { setIsLoading } = useLoader();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 200));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [setIsLoading]);

  const defaultMembers: TeamMember[] = [
    {
      id: 'member-1',
      name: `${t('team.oleksandr.name')}`,
      role: 'Team Lead & Frontend Developer',
      avatar: oleskandrTL,
      github: 'https://github.com/Oleksandr-Oliferuk',
      telegram: '#',
      linkedin: 'https://www.linkedin.com/in/oleksandr-oliferuk/',
    },
    {
      id: 'member-2',
      name: `${t('team.vladyslav-pm.name')}`,
      role: 'Project Manager & Frontend Developer',
      avatar: vladPM,
      github: 'https://github.com/vladsulyma',
      telegram: 'https://t.me/sulymavladyslav',
      linkedin: 'https://www.linkedin.com/in/vladyslav-sulyma-5b4125360/',
    },
    {
      id: 'member-3',
      name: `${t('team.artem.name')}`,
      role: 'Frontend Developer',
      avatar: artem,
      github: 'https://github.com/AARON-FOX',
      telegram: 'https://t.me/Air_foxx',
      linkedin: '#',
    },
    {
      id: 'member-4',
      name: `${t('team.max.name')}`,
      role: 'Frontend Developer',
      avatar: max,
      github: 'https://github.com/maxrori228',
      telegram: 'https://t.me/maxrori',
      linkedin: 'https://www.linkedin.com/in/maxrori/',
    },
    {
      id: 'member-5',
      name: `${t('team.vladyslav.name')}`,
      role: 'Frontend Developer',
      avatar: vlad,
      github: 'https://github.com/O1ympus',
      telegram: 'https://t.me/keygen_exe',
      linkedin:
        'https://www.linkedin.com/in/%D0%BC%D0%B0%D1%82%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-477474332/',
    },
  ];

  const team = members || defaultMembers;

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
            AMOV²
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-h2 leading-relaxed">
            {t('team-amov')}
          </p>
        </div>

        <div className="grid gap-8 xl:flex xl:flex-row xl:flex-wrap xl:items-center xl:justify-center">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-6 xl:max-w-[250px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="size-[250px] sm:size-[500px] xl:size-[200px]">
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
                  <h3 className="mb-1 text-h1 xl:text-h1 font-mont font-extrabold">
                    {member.name}
                  </h3>
                  <p className="text-primary text-h3 xl:min-h-[52px] font-semibold">
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
                      <Github className="text-muted-foreground size-6 sm:size-8" />
                    </a>
                  )}
                  {member.telegram && (
                    <a
                      href={member.telegram}
                      target="_blank"
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Send className="text-muted-foreground size-6 sm:size-8" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Linkedin className="text-muted-foreground size-6 sm:size-8" />
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
