import styled, { css } from "styled-components";

import { rem } from "@utils/index";

export const StyledButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  text-align: left;
  width: 100%;

  ${({ theme: { device } }) => css`
    @media ${device.md} {
      padding: 1rem 0;
    }
  `};

  .name {
    margin: 0;
    padding-right: 1rem;
  }
`;

export const StyledIndicator = styled.span<{ isActive: boolean }>`
  height: ${rem(18)};
  position: relative;
  width: ${rem(18)};

  ${({ theme: { device } }) => css`
    @media ${device.lg} {
      height: ${rem(28)};
      width: ${rem(28)};
    }
  `};

  span {
    background-color: ${({ theme }) => theme.colors.black};
    height: 1px;
    position: absolute;
    transition: all ease-in-out 0.15s;
    width: 50%;

    &:nth-child(1) {
      /* Slightly correct the position when inactive to connect both lines */
      left: ${({ isActive }) => (isActive ? "0" : "1px")};
      top: ${({ isActive }) => (isActive ? "35%" : "65%")};
      transform-origin: top right;
      transform: rotate(${({ isActive }) => (isActive ? "-45deg" : "45deg")});
    }

    &:nth-child(2) {
      right: 0;
      top: ${({ isActive }) => (isActive ? "35%" : "65%")};
      transform-origin: top left;
      transform: rotate(${({ isActive }) => (isActive ? "45deg" : "-45deg")});
    }
  }
`;
