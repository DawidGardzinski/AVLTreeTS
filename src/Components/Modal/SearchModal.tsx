import { Node } from '../../dataStructures/Node/Node';
import { useMainContext } from '../../hooks/useMainContext';
import { Curtain } from './Curtain';
import { Dialog } from './Dialog';

interface SearchModalProps {
  data?: Node | null;
}

const SEARCH_MODAL_TITLE = 'Search';

export const SearchModal = ({ data }: SearchModalProps) => {
  const { dispatch } = useMainContext();
  const handleClose = () => {
    dispatch({ type: 'closeModal' });
  };

  if (!data) {
    return (
      <Curtain>
        <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
          <div>The node wasn't found</div>
        </Dialog>
      </Curtain>
    );
  }
  return (
    <Curtain>
      <Dialog title={SEARCH_MODAL_TITLE} onClose={handleClose}>
        <>
          <div>The node was found</div>
          <div>Key: {data.key}</div>
          <div>Height: {data.height}</div>
          <div>Left child: {data.left ? data.left?.key : 'null'}</div>
          <div>Rigth child: {data.right ? data.right?.key : 'null'}</div>
        </>
      </Dialog>
    </Curtain>
  );
};
