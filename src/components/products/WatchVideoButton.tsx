"use client";

import { useState } from "react";

export function WatchVideoButton({
  color,
  videoId,
}: {
  color: string;
  videoId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="my-6 text-center">
        <button
          type="button"
          className="inline-flex h-[30px] items-center gap-2 px-[30px] text-base text-white"
          style={{ backgroundColor: color }}
          onClick={() => setOpen(true)}
        >
          영상 보기 ▶
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-white"
              onClick={() => setOpen(false)}
            >
              닫기
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="제품 소개 영상"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
