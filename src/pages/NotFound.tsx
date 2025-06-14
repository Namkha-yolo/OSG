import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <Link href="/">
        <button className="px-4 py-2 bg-gray-700 text-white rounded">
          Go Home
        </button>
      </Link>
    </div>
  );
}
