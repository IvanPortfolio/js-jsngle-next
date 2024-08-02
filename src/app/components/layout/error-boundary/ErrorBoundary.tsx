import React from 'react';

import { Button, Paper } from '@/components/ui';

import { Heading } from './Heading';
import { Description } from './Description';

export function ErrorBoundary({ onReset }: { onReset: any }) {
    return (
        <Paper className="flex flex-col gap-6 items-center justify-center h-full">
            <div className="flex flex-col gap-4">
                <Heading />
                <Description />
            </div>

            <Button onClick={onReset} className="mt-4">
                Try Again
            </Button>
        </Paper>
    );
}
