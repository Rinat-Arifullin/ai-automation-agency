import {ReactNode, HTMLAttributes} from 'react';

export enum EFrameTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface IFrameProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    withOutline?: boolean;
    className?: string;
    theme?: EFrameTheme;
}