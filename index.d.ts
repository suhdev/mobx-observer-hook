import { ReactElement } from 'react';
export declare function useObserver(fn: () => ReactElement, deps?: any[]): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
