import { ReactElement, useState, useRef } from 'react';
import styled from 'styled-components';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';

interface DropdownProps {
  children: ReactElement;
  options: {
    label: string;
    action: () => void;
  }[];
}

export const Dropdown = ({ children, options }: DropdownProps) => {
  const [isDropdownVisible, setVisible] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => {
    setVisible(false);
  });
  const toggleDropdownVisibility = () => setVisible(!isDropdownVisible);

  const MenuItems = options.map(({ label, action }) => (
    <MenuItem
      key={label}
      onClick={() => {
        action();
        setVisible(false);
      }}
    >
      {label}
    </MenuItem>
  ));

  return (
    <Wrapper ref={dropdownRef}>
      {isDropdownVisible && <Menu>{MenuItems}</Menu>}
      <div onClick={toggleDropdownVisibility}>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  min-width: 130px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.rounded};
  top: 0;
  left: 50%;
  transform: translate(-50%, -115%);
  padding: ${({ theme }) => theme.space.s};

  & > :not(:last-child) {
    border-bottom: solid 1px gray;
  }
`;

const MenuItem = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.xs};
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin: ${({ theme }) => theme.space.xxs} 0;

  :hover {
    background-color: ${({ theme }) => theme.colors.dropdownButtonHover};
  }
`;
