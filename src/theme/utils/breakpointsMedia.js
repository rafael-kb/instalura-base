import { css } from 'styled-components';
import { breakpoints } from '../index';

export default function breakpointsMedia(cssByBreakpoint) {
  return Object.keys(breakpoints)
    .filter((name) => Boolean(cssByBreakpoint[name]))
    .map((name) => css`
      @media only screen and (min-width: ${breakpoints[name]}px) {
        ${cssByBreakpoint[name]}
      }
  `);
}
