// from @radix-ui/react-polymorphic

import * as React from 'react';
export type Merge<P1 = unknown, P2 = unknown> = Omit<P1, keyof P2> & P2;
/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
export type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : unknown;
/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
export type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any> ? I : never;
type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<
    E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
    OwnProps & {
      as?: E;
    }
  >
>;
export interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = unknown
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ''
      ? {
          as: keyof JSX.IntrinsicElements;
        }
      : As extends React.ComponentType<infer P>
      ? Merge<
          P,
          OwnProps & {
            as: As;
          }
        >
      : As extends keyof JSX.IntrinsicElements
      ? Merge<
          JSX.IntrinsicElements[As],
          OwnProps & {
            as: As;
          }
        >
      : never
  ): React.ReactElement | null;
}
