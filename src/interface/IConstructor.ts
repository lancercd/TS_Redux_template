import React from "react";

interface IStyleRules {
    width?: string;
    height?: string;
    backgroundColor?: string;
}

type StyleRules = IStyleRules;

/**
 * 将泛型中全部属性变为可选的
 */
type Partial<T> = {[P in keyof T]?: T[P]}

/**
 * 构造函数接口
 */
type IConstructor<T = any> = {new (...args: T[]): {}};

type AnyComponent<P = any> =
    | (new (props: P) => React.Component)
    | ((props: P & { children?: React.ReactNode }) => React.ReactElement<any> | null);


// type WithStyle = (styles: IStyleRules) => <P extends IStylesProps> (Component: AnyComponent<P>) => AnyComponent<P>;

export type {
    StyleRules,
    IConstructor
}
