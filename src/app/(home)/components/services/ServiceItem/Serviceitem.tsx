import { SectionContent } from '@/components/ui';
import { Icon } from './Icon';
import { Content } from './Content';
import { Heading } from './Heading';

export function ServiceItem({ icon, serviceName, children }) {
    return (
        <SectionContent className="flex flex-col gap-4">
            <Icon icon={icon} />
            <div className="flex flex-col gap-2">
                <Heading>{serviceName}</Heading>
                <Content>{children}</Content>
            </div>
        </SectionContent>
    );
}
