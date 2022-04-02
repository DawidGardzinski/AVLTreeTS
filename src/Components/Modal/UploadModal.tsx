import { useMainContext } from '../../hooks/useMainContext';
import styled from 'styled-components';
import { Curtain } from './Curtain';
import { Dialog } from './Dialog';
import { useState } from 'react';
import { AVLTree } from '../../dataStructures/AVLTree/AVLTree';

const SEARCH_MODAL_TITLE = 'Upload';

export const UploadModal = () => {
  const {
    state: { tree },
    dispatch,
  } = useMainContext();
  const [divider, setDivider] = useState(',');

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<string[] | null>(null);

  const handleClose = () => {
    dispatch({ type: 'closeModal' });
  };

  const handleDivider = (e: React.FormEvent<HTMLSelectElement>) => {
    setDivider((e.target as HTMLSelectElement).value);
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (e: any) => {
      const content = e.target.result;

      const parsedToIntContent = content
        .split(divider)
        .map((el: any) => (Number(el) && el % 1 === 0 ? el : 'notAInteger'));

      if (parsedToIntContent.includes('notAInteger')) {
        dispatch({
          type: 'toastManipulation',
          payload: {
            text: 'A problem occurred while processing the file. Make sure the file contains only numbers and dividers',
          },
        });
        handleClose();
      } else {
        setData(parsedToIntContent);
        setLoading(false);
      }
    };
    if (e.target.files.length) {
      reader.readAsText(e.target.files[0]);
    }
  };

  if (isLoading)
    return (
      <Curtain>
        <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
          <>Loading...</>
        </Dialog>
      </Curtain>
    );

  if (data && data.length)
    return (
      <Curtain>
        <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
          <>
            <div>Founded keys:</div>
            <div>{data.reduce((prev, curr) => prev + ', ' + curr)}</div>
            <UploadFileButton
              onClick={() => {
                data.forEach((key) => tree.insert(Number(key)));
                dispatch({
                  type: 'toastManipulation',
                  payload: {
                    text: 'The keys have been successfully added to the tree.',
                  },
                });
                dispatch({ type: 'enableTreeRerender' });
                handleClose();
              }}
            >
              Apply to current Tree
            </UploadFileButton>
            <UploadFileButton
              onClick={() => {
                const newTree = new AVLTree();
                data.forEach((key) => newTree.insert(Number(key)));
                dispatch({
                  type: 'setTree',
                  payload: {
                    tree: newTree,
                  },
                });
                dispatch({
                  type: 'toastManipulation',
                  payload: {
                    text: 'The new tree has been successfully made from the given keys',
                  },
                });
                dispatch({ type: 'enableTreeRerender' });
                handleClose();
              }}
            >
              Make new tree
            </UploadFileButton>
            <UploadFileButton
              onClick={() => {
                setData(null);
              }}
            >
              Abort
            </UploadFileButton>
          </>
        </Dialog>
      </Curtain>
    );

  return (
    <Curtain>
      <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
        <>
          <label>Selected divider: </label>
          <select value={divider} onChange={handleDivider}>
            <option value=",">,</option>
            <option value=".">.</option>
          </select>
          <UploadFileInputLabel htmlFor="file-upload">
            Upload from disk
          </UploadFileInputLabel>
          <div>*only .txt files*</div>
          <HiddenInput
            type="file"
            id="file-upload"
            onChange={(e) => handleUpload(e)}
            accept=".txt"
          />
        </>
      </Dialog>
    </Curtain>
  );
};

const HiddenInput = styled.input`
  display: none;
`;

const UploadFileInputLabel = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.space.s};
  padding: ${({ theme }) => theme.space.s};
  display: block;
  cursor: pointer;
  width: fit-content;

  :hover {
    opacity: 0.5;
  }
`;

const UploadFileButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.space.s};
  padding: ${({ theme }) => theme.space.s};
  display: block;
  cursor: pointer;
  width: fit-content;

  :hover {
    opacity: 0.5;
  }
`;
