import React from 'react';

export function Banner() {
    return (
        <div className="h-[56px] bg-secondary -mx-6 overflow-x-hidden relative bg-light-blue dark:bg-white/10">
            <div className="flex flex-row relative w-[734px] gap-6 p-4 animate-scroll-from-right-to-left text-blue text-base font-medium">
                <span className="w-fit">Subscribe To The Newsletter</span>
                <span className="w-fit">Subscribe To The Newsletter</span>
                <span className="w-fit">Subscribe To The Newsletter</span>
            </div>
        </div>
    );
}
