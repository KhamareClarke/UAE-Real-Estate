'use client';

export default function ScrollActivatedVideo() {
  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-4 sm:mx-0">
      <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 relative flex items-center justify-center">
        {/* Play Button in Center */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl cursor-pointer hover:bg-white transition-all hover:scale-110">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-navy-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
