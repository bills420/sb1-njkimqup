import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../types';
import { contactInfo } from './contact';

export const socialLinks: SocialLink[] = [
  {
    icon: <Github size={28} />,
    href: contactInfo.socialMedia.github,
    label: 'GitHub Profile',
  },
  {
    icon: <Linkedin size={28} />,
    href: contactInfo.socialMedia.linkedin,
    label: 'LinkedIn Profile',
  },
  {
    icon: <Mail size={28} />,
    href: `mailto:${contactInfo.email}`,
    label: 'Email Contact',
  },
];