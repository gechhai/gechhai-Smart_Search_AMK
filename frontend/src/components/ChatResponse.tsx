import botLogo from "../Assets/Images/bot.png";
import userProfile from "../Assets/Images/profile.png";
import "@react-pdf-viewer/core/lib/styles/index.css";

export function ChatResponse({
  query,
  botResponse,
}: {
  query: string;
  botResponse: string[][] | undefined;
}) {
  return (
    <div>
      <div className="flex justify-end items-center space-x-2">
        <div className="bg-gray-200 text-black rounded-lg p-3 max-w-xs">
          {query}
        </div>
        <img
          src={userProfile}
          alt="User Profile"
          className="rounded-full w-14 h-14 border-2 border-black"
        />
      </div>

      <div className="flex justify-start items-end space-x-2">
        <img
          src={botLogo}
          alt="Bot Logo"
          className="rounded-full w-14 h-14 border-2 border-black mb-2"
        />
        <div className="bg-white text-black rounded-lg p-3 w-full flex-grow mt-5">
          {botResponse && Array.isArray(botResponse) ? (
            botResponse.map((items, index) => (
              <div className="mb-6" key={index}>
                {items[1].split("\n").map((item, subIndex) => (
                  <p key={subIndex} className="mb-2 whitespace-pre-wrap">
                    {item}
                  </p>
                ))}
                {items[0] !== "no" && (
                  <a
                    href={`https://xfytapjpgmvbtowkpizl.supabase.co/storage/v1/object/public/amk_ideation/${items[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Preview PDF
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-red-500">No response available</p>
          )}
        </div>
      </div>
    </div>
  );
}
