'use client';

import useLocalStorageState from 'use-local-storage-state';

export default function DebugControl() {
  const [isVisibleRCC, setIsVisibleRCC] = useLocalStorageState('isVisibleRCC');

  return (
    <div className="fixed bottom-4 left-4">
      <button
        className="p-2 bg-gray-200 rounded-md"
        onClick={() => {
          setIsVisibleRCC(true);
        }}
      >
        RCC ON
      </button>
      <button
        className="p-2 bg-gray-200 rounded-md"
        onClick={() => {
          setIsVisibleRCC(false);
        }}
      >
        RCC OFF
      </button>
    </div>
  );
}
