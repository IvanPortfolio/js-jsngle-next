import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import ArrowRightIcon from '@/assets/icons/24/arrowRight.svg';
import Image from 'next/image';
import insuranceImage from '@/assets/images/insurance.png';
import deliveryImage from '@/assets/images/delivery.png';
import { Button } from '@/components/ui/Button';
import { SectionContent } from '@/components/ui/SectionContent';

function ProjectItem({ image, children }) {
    return (
        <SectionContent className="group hover:bg-light-blue-hover flex flex-col gap-4">
            <div className={'rounded-lg overflow-hidden w-full h-[165px]'}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={380}
                    className={'group-hover:scale-125'}
                />
            </div>

            <h3 className="text-lg text-dark dark:text-white font-semibold">
                {children}
            </h3>
        </SectionContent>
    );
}

export function ProjectsSection() {
    return (
        <Section
            title="My Projects"
            link={
                <Button asChild variant="link" size="link">
                    <Link
                        href={'/projects'}
                        className="flex flex-row gap-2 justify-center items-center"
                    >
                        View all <ArrowRightIcon />
                    </Link>
                </Button>
            }
        >
            <div className="flex flex-col 2xl:flex-row gap-4">
                <ProjectItem
                    image={{
                        src: insuranceImage,
                        alt: 'Insurance Management Platform',
                    }}
                >
                    Insurance Management Platform
                </ProjectItem>
                <ProjectItem
                    image={{
                        src: deliveryImage,
                        alt: 'System for Optimizing Delivery Process',
                    }}
                >
                    System for Optimizing Delivery Process
                </ProjectItem>
            </div>
        </Section>
    );
}
