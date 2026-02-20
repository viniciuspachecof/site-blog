import { useRouter } from 'next/router';

export default function BlogPage() {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div className="min-h-full">
      <h2 className="text-4xl text-green-400">blog</h2>
    </div>
  );
}
