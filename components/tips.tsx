import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowUpRight } from 'lucide-react';

export default function Tips({
  children,
  className,
  id,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (!id) {
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger className={className}>{children}</PopoverTrigger>
      <PopoverContent className="prose max-h-96 overflow-auto prose-sm prose-h3:text-base rounded-lg prose-h3:mb-4 max-w-sm w-full">
        {docs[id].body}
        {docs[id].links.length > 0 && (
          <>
            <hr />
            <ul>
              {docs[id].links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span>
                      {link.title}
                      <ArrowUpRight size={14} className="ml-1 inline" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

const docs: {
  [id in string]: {
    body: React.ReactNode;
    links: {
      title: string;
      url: string;
    }[];
  };
} = {
  rscPayload: {
    links: [
      {
        title: 'サーバーコンポーネントはどのようにレンダリングされますか?',
        url: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components#how-are-server-components-rendered',
      },
    ],
    body: (
      <>
        <h3>RSCペイロード</h3>

        <p>
          クライアントのReactによってブラウザのDOMを更新するために使用されます。RSCペイロードには以下が含まれます。
        </p>

        <ul>
          <li>サーバーコンポーネントのレンダリング結果</li>
          <li>
            クライアントコンポーネントをレンダリングする場所のプレースホルダとJavaScriptファイルへの参照
          </li>
          <li>
            サーバーコンポーネントからクライアントコンポーネントに渡された小道具
          </li>
        </ul>
      </>
    ),
  },
  routerCache: {
    links: [
      {
        title: 'ルーターキャッシュ',
        url: 'https://nextjs.org/docs/app/building-your-application/caching#router-cache',
      },
    ],
    body: (
      <>
        <h3>ルーターキャッシュ</h3>

        <p>
          セッション中、ルートごとにRSCペイロードがクライアントのメモリにキャッシュされます。これはルーターキャッシュと呼ばれます。
        </p>

        <div className="p-4 rounded-lg border">
          ルーターキャッシュとフルルートキャッシュの違い:
          ルーターキャッシュは、ユーザーセッションの期間中、ブラウザにReact
          Serverコンポーネントペイロードを一時的に保存しますが、フルルートキャッシュは、複数のユーザーリクエストにわたってReact
          ServerコンポーネントペイロードとHTMLをサーバーに永続的に保存します。
          フルルートキャッシュは静的にレンダリングされたルートのみをキャッシュしますが、ルーターキャッシュは静的にレンダリングされたルートと動的にレンダリングされたルートの両方に適用されます。
        </div>

        <h3>ルーターキャッシュを更新する方法</h3>

        <p>以下のいずれかの方法でルーターキャッシュをその場で更新できます。</p>
        <ul>
          <li>
            A: サーバーアクションで以下のいずれかを実行
            <ul>
              <li>
                <code>revalidatePath</code> または <code>revalidateTag</code>
              </li>
              <li>
                <code>cookies.set</code> または <code>cookies.delete</code>
              </li>
            </ul>
          </li>
          <li>
            B: クライアントで <code>router.refresh</code> を実行
          </li>
        </ul>
      </>
    ),
  },
};
