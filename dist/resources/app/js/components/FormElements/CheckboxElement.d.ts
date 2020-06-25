import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
declare type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>;
declare const CheckboxElement: React.FC<IElementProps>;
export default CheckboxElement;
