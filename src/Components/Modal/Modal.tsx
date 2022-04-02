import { useMainContext } from '../../hooks/useMainContext';
import { DownloadModal } from './DownloadModal';
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
    case 'download':
      return <DownloadModal />;
    default:
      return null;
  }
};
