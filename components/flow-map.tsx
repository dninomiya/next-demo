import BuildTaskColumn from '@/components/flow/build-task/column';
import DataCacheColumn from '@/components/flow/data-cache/column';
import FullRouteCacheColumn from '@/components/flow/full-route-cache/column';
import RouterCacheColumn from '@/components/flow/router-cache/column';
import Tips from '@/components/tips';
import { cn } from '@/lib/utils';

export default function FlowMap() {
  return (
    <div className="grid grid-cols-6 gap-x-4 gap-y-6 container py-10 text-sm">
      <div className="col-span-2">
        <ScopeLabel>クライアント</ScopeLabel>
      </div>
      <div className="col-span-4">
        <ScopeLabel>サーバー</ScopeLabel>
      </div>

      {/* ====== */}

      <ColLabel title="ブラウザ" />
      <ColLabel types={['RSC Payload']} title="ルーターキャッシュ" inMemory />
      <ColLabel
        title="フルルートキャッシュ"
        types={['RSC Payload', 'HTML']}
        inMemory={false}
      />
      <div className="p-2 rounded-lg border-2">
        <h2 className="font-bold mb-4">ビルド</h2>
        <ColLabel
          title="リクエストメモ化"
          types={['Function Returns']}
          inMemory
        />
      </div>
      <ColLabel title="データキャッシュ" types={['JSON']} inMemory={false} />
      <ColLabel title="データソース" />

      {/* ====== */}

      <div className="col-span-1"></div>

      {/* ルーターキャッシュ */}
      <div className="col-span-1 space-y-2">
        <RouterCacheColumn />
      </div>

      {/* フルルートキャッシュ */}
      <div className="col-span-1 space-y-2">
        <FullRouteCacheColumn />
      </div>

      {/* ビルド&リクエストメモ化 */}
      <div className="col-span-1">
        <BuildTaskColumn />
      </div>

      {/* データキャッシュ */}
      <div className="col-span-1">
        <DataCacheColumn />
      </div>

      {/* データソース */}
      <div className="col-span-1"></div>
    </div>
  );
}

const ScopeLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="bg-gray-50 font-semibold border rounded-lg shadow px-2 py-3 text-center">
      {children}
    </h2>
  );
};

const ColLabel = ({
  title,
  inMemory,
  types,
}: {
  title: string;
  inMemory?: boolean;
  types?: string[];
}) => {
  const borderColors: {
    [key in string]: {
      border: string;
      background: string;
      subBackground: string;
    };
  } = {
    ブラウザ: {
      border: '',
      background: '',
      subBackground: '',
    },
    ルーターキャッシュ: {
      border: 'border-pink-500',
      background: 'bg-pink-500/5',
      subBackground: 'bg-pink-100',
    },
    フルルートキャッシュ: {
      border: 'border-blue-500',
      background: 'bg-blue-500/5',
      subBackground: 'bg-blue-100',
    },
    リクエストメモ化: {
      border: 'border-yellow-500',
      background: 'bg-yellow-500/5',
      subBackground: 'bg-yellow-100',
    },
    データキャッシュ: {
      border: 'border-purple-500',
      background: 'bg-purple-500/5',
      subBackground: 'bg-purple-100',
    },
    データソース: {
      border: '',
      background: '',
      subBackground: '',
    },
  };

  const hasLabel = inMemory === true || inMemory === false;

  return (
    <div
      className={cn(
        'px-2 pb-2 rounded-lg border-2 relative col-span-1',
        hasLabel ? 'pt-5' : 'pt-2',
        borderColors[title].border,
        borderColors[title].background
      )}
    >
      <h2 className="font-semibold text-black/70">
        <Tips id="routerCache">{title}</Tips>
      </h2>

      {hasLabel && (
        <p
          className={cn(
            'text-xs text-black/70 absolute top-0 leading-none -translate-y-1/2 p-1 left-2 rounded-lg border-2',
            borderColors[title].border,
            borderColors[title].subBackground
          )}
        >
          {inMemory ? '一時的（メモリ）' : '永続的'}
        </p>
      )}
      {types && (
        <div className="flex gap-1 mt-2">
          {types.map((type) => (
            <Tips
              key={`title-${type}`}
              className={cn(
                'text-xs leading-none border-2 rounded-md p-1 text-black/70',
                borderColors[title].border,
                borderColors[title].subBackground
              )}
              id="rscPayload"
            >
              {type}
            </Tips>
          ))}
        </div>
      )}
    </div>
  );
};
