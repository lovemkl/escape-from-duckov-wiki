type Props = {
  videoId: string;
  title: string;
};

export function YouTubeEmbed({ videoId, title }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_0_40px_rgba(56,189,248,0.08)]">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
