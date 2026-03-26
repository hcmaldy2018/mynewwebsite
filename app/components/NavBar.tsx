import Link from "next/link";

export function NavBar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-center">

        {/* Clickable Logo */}
        <Link href="/" className="text-lg font-semibold text-gray-900 tracking-tight">
          Romero <span className="text-[#1e3a8a]">&</span> Locksley
        </Link>

      </div>
    </header>
  );
}