import { saveBuildTimestamp } from '@/actions/revalidate';
import PageContent from '@/app/_components/page-content';

export default function Page() {
  saveBuildTimestamp('static-a');

  return <PageContent isStatic title="B" />;
}
