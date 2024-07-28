import React from 'react';

export function WorkExperienceLogo(props: { image: React.JSX.Element }) {
    return (
        <div className="flex size-12 bg-dark rounded-lg items-center overflow-hidden">
            {props.image}
        </div>
    );
}
