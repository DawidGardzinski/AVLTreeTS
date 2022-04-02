import { useMainContext } from '../../hooks/useMainContext';
import styled from 'styled-components';
import { Curtain } from './Curtain';
import { Dialog } from './Dialog';

const SEARCH_MODAL_TITLE = 'Download';

export const DownloadModal = () => {
  const {
    state: { tree },
    dispatch,
  } = useMainContext();

  const handleClose = () => {
    dispatch({ type: 'closeModal' });
  };

  return (
    <Curtain>
      <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
        <>
          <div>Current tree (Linked list)</div>
          <DownloadButton
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(tree.getRoot(), undefined, 2)
            )}`}
            download="avltree-linked-list.json"
          >
            Download as JSON
          </DownloadButton>
          <div>Current tree (Array with nulls)</div>
          <DownloadButton
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(tree.levelOrderWithNulls())
            )}`}
            download="avltree-level-order.json"
          >
            Download as JSON
          </DownloadButton>

          <div>Current tree (Level order)</div>
          <DownloadButton
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(tree.levelOrder())
            )}`}
            download="avltree-array.json"
          >
            Download as JSON
          </DownloadButton>
        </>
      </Dialog>
    </Curtain>
  );
};

const DownloadButton = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.space.s};
  padding: ${({ theme }) => theme.space.s};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  display: block;
  cursor: pointer;
  width: fit-content;
  margin-bottom: ${({ theme }) => theme.space.xxl};

  :hover {
    opacity: 0.5;
  }
`;
