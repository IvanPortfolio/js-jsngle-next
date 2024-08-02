import React from 'react';
import { CompanyName } from './CompanyName';
import { Title } from './Title';

export function Description(props: { companyName: string; title: string }) {
    return (
        <div className="flex flex-col gap-1">
            <CompanyName>{props.companyName}</CompanyName>
            <Title title={props.title} />
        </div>
    );
}
