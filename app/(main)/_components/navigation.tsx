import NavigationLink from '@/app/(main)/_components/navigation-link';
import { Zap, ZapOff } from 'lucide-react';

const staticRenderingPages = [
  {
    title: 'A',
    path: '/static/a',
  },
  {
    title: 'B',
    path: '/static/b',
  },
];

const dynamicRenderingPages = [
  {
    title: 'C',
    path: '/dynamic/c',
  },
  {
    title: 'D',
    path: '/dynamic/d',
  },
];

export default function Navigation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 gap-2 text-sm flex items-center text-muted-foreground">
          <ZapOff size={16} />
          静的生成
        </h2>
        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {staticRenderingPages.map((page) => (
            <NavigationLink page={page} key={page.path} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-2 gap-2 text-sm flex items-center text-muted-foreground">
          <Zap size={16} />
          動的生成
        </h2>
        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {dynamicRenderingPages.map((page) => (
            <NavigationLink page={page} key={page.path} />
          ))}
        </div>
      </div>
    </div>
  );
}
