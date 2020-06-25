import * as React from 'react';
import { ConnectedProps } from 'react-redux';
import { IMenuProps } from '../Search';
declare const connected: import("react-redux").InferableComponentEnhancerWithProps<{
    count: number;
} & import("react-redux").DispatchProp<import("redux").AnyAction>, {}>;
declare type IMenuCartProps = IMenuProps & ConnectedProps<typeof connected>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<IMenuCartProps>, Pick<IMenuCartProps, "openMenu" | "changeOpen">>;
export default _default;
