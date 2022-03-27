import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../common';

type Type = 'insert' | 'delete' | 'search';

interface ControlProps {
  type: Type;
  cb?: (n: number) => void;
}

const getControlLabel = (type: Type) => {
  switch (type) {
    case 'insert':
      return 'Insert:';
    case 'delete':
      return 'Delete:';
    case 'search':
      return 'Search:';
  }
};

export const Control = ({ type, cb }: ControlProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (!cb || !inputValue) return null;
    cb(parseInt(inputValue));
  };

  return (
    <Wrapper>
      <Label htmlFor={type}>{getControlLabel(type)}</Label>
      <Input
        width={100}
        id={type}
        type="number"
        value={inputValue}
        onChange={onChange}
        ml="s"
      />
      <Button variant="submit" ml="s" onClick={handleClick}>
        Execute
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;
