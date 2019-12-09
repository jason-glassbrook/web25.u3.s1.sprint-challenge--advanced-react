/*******************************************************************************
  hooks/http
--------------------------------------------------------------------------------
  React hooks for HTTP requests.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import useGet from './useHttpGet';

export default {
  useGet,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as useHttpGet } from './useHttpGet';
