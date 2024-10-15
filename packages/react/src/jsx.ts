import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import type { Type, Key, Ref, Props, ReactElement, ElementType } from 'shared/ReactTypes';

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

export const jsx = (
  type: ElementType,
  config: any,
  ...maybeChildren: any[]
) => {
  let key: Key = null;
  const props: Props = { };
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + config[prop];
      }
      continue;
    }
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }
    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  if (maybeChildren.length === 1) {
    props.children = maybeChildren[0];
  } else if (maybeChildren.length > 1) {
    props.children = maybeChildren;
  }

  return ReactElement(type, key, ref, props);
};

export const jsxDEV = (
  type: ElementType,
  config: any,
) => {
  let key: Key = null;
  const props: Props = { };
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + config[prop];
      }
      continue;
    }
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }
    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  return ReactElement(type, key, ref, props);
};
