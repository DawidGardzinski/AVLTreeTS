import { useMainContext } from '../../hooks/useMainContext';
import { SearchModal } from './SearchModal';
import { UploadModal } from './UploadModal';

export const Modal = () => {
  const { state } = useMainContext();
  const { modal } = state;

  if (modal.visibility === 'hidden') return null;

  switch (modal.type) {
    case 'search':
      return <SearchModal data={modal.data} />;
    case 'upload':
      return <UploadModal />;
    default:
      return null;
  }
};
