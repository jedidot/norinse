"use client";

import { useEffect, useId, useRef, useState } from "react";

type YtPlayer = {
  destroy: () => void;
  setOption?: (
    module: string,
    option: string,
    value: { languageCode: string }
  ) => void;
};

type YtNamespace = {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: { target: YtPlayer }) => void;
        onApiChange?: (event: { target: YtPlayer }) => void;
      };
    }
  ) => YtPlayer;
};

declare global {
  interface Window {
    YT?: YtNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();

  if (!ytApiPromise) {
    ytApiPromise = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.async = true;
        document.head.appendChild(tag);
      }
    });
  }

  return ytApiPromise;
}

function applyKoreanCaptions(player: YtPlayer) {
  try {
    player.setOption?.("captions", "track", { languageCode: "ko" });
  } catch {
    /* 비공식 API — 자막 트랙 없으면 무시 */
  }
}

export function WatchVideoButton({
  color,
  videoId,
}: {
  color: string;
  videoId: string;
}) {
  const [open, setOpen] = useState(false);
  const playerRef = useRef<YtPlayer | null>(null);
  const reactId = useId();
  const playerElementId = `yt-player-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT?.Player) return;

      const playerVars: Record<string, string | number> = {
        autoplay: 1,
        cc_load_policy: 1,
        cc_lang_pref: "ko",
        hl: "ko",
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      };
      if (typeof window !== "undefined") {
        playerVars.origin = window.location.origin;
      }

      playerRef.current = new window.YT.Player(playerElementId, {
        videoId,
        host: "https://www.youtube.com",
        playerVars,
        events: {
          onReady: (event) => applyKoreanCaptions(event.target),
          onApiChange: (event) => applyKoreanCaptions(event.target),
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [open, videoId, playerElementId]);

  return (
    <>
      <div className="my-6 text-center">
        <button
          type="button"
          className="inline-flex h-[30px] cursor-pointer items-center gap-2 px-[30px] text-base text-white"
          style={{ backgroundColor: color }}
          onClick={() => setOpen(true)}
        >
          영상 보기 ▶
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex cursor-default items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 cursor-pointer text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              닫기
            </button>
            <div className="aspect-video w-full">
              <div id={playerElementId} className="h-full w-full" title="제품 소개 영상" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
