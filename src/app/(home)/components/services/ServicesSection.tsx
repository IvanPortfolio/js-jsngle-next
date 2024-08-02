import CodeIcon from '@/assets/icons/48/code.svg';
import DeviceIcon from '@/assets/icons/48/device.svg';
import PlugsIcon from '@/assets/icons/48/plugs.svg';
import { Section } from '@/components/ui';
import { ServiceItem } from './ServiceItem';

export function ServicesSection() {
    return (
        <Section title="My Services">
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
                <ServiceItem
                    icon={<CodeIcon />}
                    serviceName="Web Development (React)"
                >
                    Specializing in modern web application development using
                    React, I create dynamic, responsive, and user-friendly
                    interfaces that enhance user interaction and engagement. My
                    focus is on crafting scalable and maintainable web solutions
                    tailored to meet specific business needs.
                </ServiceItem>
                <ServiceItem
                    icon={<DeviceIcon />}
                    serviceName="Mobile Development (React Native)"
                >
                    Leveraging React Native, I develop cross-platform mobile
                    applications that run on
                    <br /> both iOS and Android from a single code base. This
                    approach allows for faster development, easier maintenance,
                    and reduced costs while providing a near-native user
                    experience.
                </ServiceItem>
                <ServiceItem
                    icon={<PlugsIcon />}
                    serviceName="API Development (Node.js)"
                >
                    I develop robust and scalable APIs using Node.js, designed
                    to power web and mobile applications efficiently. My APIs
                    facilitate seamless data handling, security, and integration
                    with other services and databases
                </ServiceItem>
            </div>
        </Section>
    );
}
