import { ImageResponse } from 'next/og';
import { JavaScriptThumbnail } from '@/components/JavaScriptThumbnail';
import { GradientThumbnail } from '@/components/GradientThumbnail';

export const alt = 'JavaScript Blog';

export const contentType = 'image/png';

export const size = {
    width: 1200,
    height: 600,
};

export default function Image() {
    return new ImageResponse(
        (
            <GradientThumbnail
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage:
                        'linear-gradient(to right, #FD4C9C, #F89B29)',
                }}
            >
                <span>React</span>
            </GradientThumbnail>
        ),
        {
            ...size,
        },
    );
}
