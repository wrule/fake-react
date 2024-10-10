import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import type { Type, Key, Ref, Props, ReactElement } from 'shared/ReactTypes';

// ReactElement

const ReactElement = function(
  type: Type,
  key: Key,
  ref: Ref,
  props: Props,
): ReactElement {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type, key, ref, props,
    __mark: 'jimao',
  };
  return element;
}
