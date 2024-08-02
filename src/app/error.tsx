'use client';

import React, { useEffect } from 'react';
import { ErrorBoundary } from '@/components/layout';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    });
    return <ErrorBoundary onReset={reset} />;
}
