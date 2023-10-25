import { saveBuildTimestamp } from '@/actions/revalidate';
import PageContent from '@/app/_components/page-content';

export default function Page() {
  saveBuildTimestamp('a');

  return <PageContent isStatic title="A" />;
}
