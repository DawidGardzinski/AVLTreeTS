import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';
import { Connection } from './Connection';
import { useForceUpdate } from '../../hooks/useForceUpdate';

interface ConnectionsProps {
  nodeRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  arrayTree: (number | null)[];
}

const getItemCenterVector = ({
  bottom,
  top,
  left,
  right,
}: {
  bottom: number;
  top: number;
  left: number;
  right: number;
}): [number, number] => {
  return [
    (right - left) / 2 + left + window.scrollX,
    (bottom - top) / 2 + top + window.scrollY,
  ];
};

export const Connections = ({ nodeRefs, arrayTree }: ConnectionsProps) => {
  const [isLoading, setLoading] = useState(true);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (nodeRefs.current.length) {
      setLoading(false);
    }
  }, [nodeRefs]);

  window.addEventListener(
    'resize',
    useDebouncedCallback(() => {
      forceUpdate();
      setLoading(false);
    }, 100)
  );
  if (isLoading) return null;

  window.addEventListener('resize', () => setLoading(true), { once: true });

  const Lines = nodeRefs.current.map((nodeRef, index, arr) => {
    const leftNodeIndex = 2 * index + 1;
    const rightNodeIndex = 2 * index + 2;
    const { leftNode, rightNode, parentNode } = {
      parentNode: nodeRef,
      leftNode: arr[leftNodeIndex],
      rightNode: arr[rightNodeIndex],
    };

    if (!parentNode || !leftNode || !rightNode) return null; //tree was filled with nulls (it's full tree) so i don't have to use AND.

    const {
      left: parentNodeClientRectLeft,
      right: parentNodeClientRectRight,
      bottom: parentNodeClientRectBottom,
      top: parentNodeClientRectTop,
    } = parentNode.getBoundingClientRect();

    const parentNodeCenterVector = getItemCenterVector({
      left: parentNodeClientRectLeft,
      right: parentNodeClientRectRight,
      bottom: parentNodeClientRectBottom,
      top: parentNodeClientRectTop,
    });

    const {
      left: leftNodeClientRectLeft,
      right: leftNodeClientRectRight,
      bottom: leftNodeClientRectBottom,
      top: leftNodeClientRectTop,
    } = leftNode.getBoundingClientRect();

    const leftNodeCenterVector = getItemCenterVector({
      left: leftNodeClientRectLeft,
      right: leftNodeClientRectRight,
      bottom: leftNodeClientRectBottom,
      top: leftNodeClientRectTop,
    });

    const {
      left: rightNodeClientRectLeft,
      right: rightNodeClientRectRight,
      bottom: rightNodeClientRectBottom,
      top: rightNodeClientRectTop,
    } = rightNode.getBoundingClientRect();

    const rightNodeCenterVector = getItemCenterVector({
      left: rightNodeClientRectLeft,
      right: rightNodeClientRectRight,
      bottom: rightNodeClientRectBottom,
      top: rightNodeClientRectTop,
    });

    return (
      <>
        {arrayTree[leftNodeIndex] === null || (
          <Connection
            key={`connection-${index}-a`}
            fromVector={parentNodeCenterVector}
            toVector={leftNodeCenterVector}
          />
        )}
        {arrayTree[rightNodeIndex] === null || (
          <Connection
            key={`connection-${index}-b`}
            fromVector={parentNodeCenterVector}
            toVector={rightNodeCenterVector}
          />
        )}
      </>
    );
  });

  return <SVG>{Lines}</SVG>;
};

const SVG = styled.svg`
  overflow: visible;
  top: 0;
  left: 0;
  position: absolute;
`;
