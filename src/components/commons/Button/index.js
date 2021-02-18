import styled, { css } from "styled-components";
import get from 'lodash/get'
import { TextStyleVariants } from "../../foundation/Text";

const ButtonGhost = css`
  color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
  color: ${({theme, variant}) => get(theme, `colors.${variant}.contrastText`) };
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer; 
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  ${TextStyleVariants.smallestException}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;