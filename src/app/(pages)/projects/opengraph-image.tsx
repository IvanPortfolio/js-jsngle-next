import { ImageResponse } from 'next/og';
import JavaScriptIcon from '@/assets/icons/javaScript.svg';
import React from 'react';

export const runtime = 'edge';

// Image metadata
export const alt = 'JsJungle';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            /*<JavaScriptThumbnail />*/
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage:
                        'linear-gradient(to right, #FD4C9C, #F89B29)',
                    transform: 'scale(1.43)',
                }}
            >
                <JavaScriptIcon />
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        },
    );
}
