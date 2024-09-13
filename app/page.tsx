// app/page.tsx
import ValueSetter from '../components/ValueSetter';
import ContentLoader from '../components/ContentLoader';
import Skeleton from '../components/Skeleton';
import { Suspense } from 'react';

export default function Page({ searchParams }: { searchParams: { A?: string; B?: string } }) {


  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center text-gray-900">Value Setters</h1>
      <div className="space-y-4">
        <ValueSetter name="A" />
        <ValueSetter name="B" />
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-900">Content Loaders</h1>
      <div className="space-y-4">
        <Suspense fallback={<Skeleton />}>
          <ContentLoader label={'Nothing'} />
        </Suspense>
      </div>
    </div>
  );
}
