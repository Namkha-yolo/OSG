import { Link } from 'wouter';

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/signin">
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
}
