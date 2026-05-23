import type { ReactNode } from 'react';

export interface SectionTitleProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    className?: string;
}