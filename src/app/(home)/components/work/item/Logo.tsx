import React from 'react';

export function Logo(props: { image: React.JSX.Element }) {
    return (
        <div className="flex size-12 bg-dark rounded-lg items-center overflow-hidden">
            {props.image}
        </div>
    );
}
