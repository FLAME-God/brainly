import { DocumentIcon } from "../icon/Document";
import { ShareIcon } from "../icon/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "artical" | "video" | "image" | "audio";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm border border-slate-100 p-8 max-w-72 text-lg min-h-40 min-w-64 max-h-72 overflow-y-auto">
      <div className="flex justify-between">
        <div className="text-gray-700 pr-2 flex justify-between">
          <div className="text-gray-700 pr-2">
            <DocumentIcon size="lg" />
          </div>
          {title}
        </div>
        <div className="flex">
          <div className="pr-2 text-gray-700">
            <ShareIcon size="lg" />
          </div>
          <div className="pr-2 text-gray-700">
            <ShareIcon size="lg" />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-4 content-center">
          {type === "audio" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "image" && (
            <blockquote className="twitter-tweet w-full h-full">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
          {type === "video" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "artical" && (
            <blockquote className="twitter-tweet w-full h-full">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
