import React from 'react';

export interface IProject {
    title: string;
    jobTitle: string;
    date: string;
    image: React.JSX.Element;
    responsibilities: string[];
    skills: string[];
    description: string;
}
