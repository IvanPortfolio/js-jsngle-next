import LinkedInIcon from '@/assets/icons/24/linkedin.svg';
import GithubIcon from '@/assets/icons/24/github.svg';
import FacebookIcon from '@/assets/icons/24/facebook.svg';
import DevToIcon from '@/assets/icons/24/devto.svg';
import InstagramIcon from '@/assets/icons/24/instagram.svg';
import { Button } from '@/app/components/ui/Button';

export function SocialLinks() {
    // An array of social links objects
    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/ivan-kaminskyi-345b94113/',
            icon: <LinkedInIcon />,
            alt: 'LinkedIn Icon',
        },
        {
            href: 'https://github.com/JsJungle',
            icon: <GithubIcon />,
            alt: 'GitHub Icon',
        },
        {
            href: 'https://www.facebook.com/share/7iSNbzs4m9ZfNZgu/?mibextid=LQQJ4d',
            icon: <FacebookIcon />,
            alt: 'Facebook Icon',
        },
        {
            href: 'https://dev.to/ivan_kaminskyi',
            icon: <DevToIcon />,
            alt: 'Dev.to Icon',
        },
        {
            href: 'https://www.instagram.com/ivankaminskii?igsh=aGRnazZyM2txYW9w&utm_source=qr',
            icon: <InstagramIcon />,
            alt: 'Instagram Icon',
        },
    ];

    return (
        <div className="flex flex-row gap-4">
            {socialLinks.map((link, index) => (
                <Button variant="secondary" size="icon" key={index} asChild>
                    <a href={link.href} target="_blank">
                        {link.icon}
                    </a>
                </Button>
            ))}
        </div>
    );
}
