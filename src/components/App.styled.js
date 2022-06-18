import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 10px;
  border-bottom: 1px lightslategray solid;
  box-shadow: 0px 0px 3px 1px lightslategray;
`;

export const Link = styled(NavLink)`
  padding: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &.active {
    composes: link;
    color: brown;
  }

    &:hover {
  text-decoration: underline;
`;
