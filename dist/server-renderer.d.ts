/// <reference types="node" />
import { App } from 'vue';
import { Component } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { Readable } from 'stream';
import { Slots } from 'vue';
import { VNode } from 'vue';

declare type Props = Record<string, unknown>;

declare type PushFn = (item: SSRBufferItem) => void;

export declare function renderToStream(input: App | VNode, context?: SSRContext): Readable;

export declare function renderToString(input: App | VNode, context?: SSRContext): Promise<string>;

declare type SSRBuffer = SSRBufferItem[] & {
    hasAsync?: boolean;
};

declare type SSRBufferItem = string | SSRBuffer | Promise<SSRBuffer>;

export declare type SSRContext = {
    [key: string]: any;
    teleports?: Record<string, string>;
    __teleportBuffers?: Record<string, SSRBuffer>;
};

export declare function ssrGetDynamicModelProps(existingProps: any, model: unknown): {
    checked: boolean;
    value?: undefined;
} | {
    value: unknown;
    checked?: undefined;
} | null;

export declare function ssrInterpolate(value: unknown): string;

export declare function ssrLooseContain(arr: unknown[], value: unknown): boolean;

export declare const ssrLooseEqual: (a: unknown, b: unknown) => boolean;

export declare function ssrRenderAttr(key: string, value: unknown): string;

export declare function ssrRenderAttrs(props: Record<string, unknown>, tag?: string): string;

export declare function ssrRenderClass(raw: unknown): string;

export declare function ssrRenderComponent(comp: Component, props?: Props | null, children?: Slots | SSRSlots | null, parentComponent?: ComponentInternalInstance | null, slotScopeId?: string): SSRBuffer | Promise<SSRBuffer>;

export declare function ssrRenderDynamicAttr(key: string, value: unknown, tag?: string): string;

export declare function ssrRenderDynamicModel(type: unknown, model: unknown, value: unknown): string;

export declare function ssrRenderList(source: unknown, renderItem: (value: unknown, key: string | number, index?: number) => void): void;

export declare function ssrRenderSlot(slots: Slots | SSRSlots, slotName: string, slotProps: Props, fallbackRenderFn: (() => void) | null, push: PushFn, parentComponent: ComponentInternalInstance, slotScopeId?: string | null): void;

export declare function ssrRenderStyle(raw: unknown): string;

export declare function ssrRenderSuspense(push: PushFn, { default: renderContent }: Record<string, (() => void) | undefined>): Promise<void>;

export declare function ssrRenderTeleport(parentPush: PushFn, contentRenderFn: (push: PushFn) => void, target: string, disabled: boolean, parentComponent: ComponentInternalInstance): void;

export declare function ssrRenderVNode(push: PushFn, vnode: VNode, parentComponent: ComponentInternalInstance): void;

declare type SSRSlot = (props: Props, push: PushFn, parentComponent: ComponentInternalInstance | null, scopeId: string | null) => void;

declare type SSRSlots = Record<string, SSRSlot>;

export { }
