export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black animate-gradient" />
        <div className="absolute inset-0 opacity-50">
          {/* Main blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          
          {/* Small floating blobs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-lg animate-float" />
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-lg animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-lg animate-float animation-delay-4000" />
        </div>

        {/* Parallax grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] animate-parallax" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 