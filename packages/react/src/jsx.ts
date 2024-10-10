import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbols';

// ReactElement

const ReactElement = function(
  type,
  key,
  ref,
  props,
) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    key, ref, props,
    __mark: 'jimao',
  };
  return element;
}
