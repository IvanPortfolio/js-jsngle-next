import LinkedInIcon from '@/assets/icons/24/linkedin.svg';
import GithubIcon from '@/assets/icons/24/github.svg';
import FacebookIcon from '@/assets/icons/24/facebook.svg';
import DevToIcon from '@/assets/icons/24/devto.svg';
import InstagramIcon from '@/assets/icons/24/instagram.svg';
import { Button } from '@/components/ui/Button';

export function SocialLinks() {
    // An array of social links objects
    const socialLinks = [
        { href: '#', icon: <LinkedInIcon />, alt: 'LinkedIn Icon' },
        { href: '#', icon: <GithubIcon />, alt: 'GitHub Icon' },
        { href: '#', icon: <FacebookIcon />, alt: 'Facebook Icon' },
        { href: '#', icon: <DevToIcon />, alt: 'Dev.to Icon' },
        { href: '#', icon: <InstagramIcon />, alt: 'Instagram Icon' },
    ];

    return (
        <div className="flex flex-row gap-4">
            {socialLinks.map((link, index) => (
                <Button variant="secondary" size="icon" key={index}>
                    {link.icon}
                </Button>
            ))}
        </div>
    );
}
