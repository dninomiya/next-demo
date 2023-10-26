import { Loader } from 'lucide-react';

export default function PageLoader() {
  return <p>loading</p>;
  return (
    <div className="grid place-content-center h-full">
      <Loader
        size={24}
        className="text-muted-foreground mx-auto animate-spin"
      />
    </div>
  );
}
