import { Paper } from '@/app/components/ui/Paper';
import { ProfileInfo } from './ProfileInfo';
import { SocialLinks } from './SocialLinks';
import { ProfileActions } from './ProfileActions';

export function ProfileSection() {
    return (
        <Paper>
            <div className="p-6 flex flex-col gap-6">
                <ProfileInfo />
                <SocialLinks />
                <ProfileActions />
            </div>
        </Paper>
    );
}
