import { useMainContext } from '../../hooks/useMainContext';
import { SearchModal } from './SearchModal';

export const Modal = () => {
  const { state } = useMainContext();
  const { modal } = state;

  if (modal.visibility === 'hidden') return null;

  if (modal.data) {
    console.log(modal.data);
  }
  switch (modal.type) {
    case 'search':
      return <SearchModal data={modal.data} />;
    default:
      return null;
  }
};
