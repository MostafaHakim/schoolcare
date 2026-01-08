import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const notices = [
    {
      id: 1,
      date: "2025-10-30",
      content:
        "প্রিয় অভিভাবক, আশা করি আপনারা সবাই ভালো আছেন। আপনার সন্তানদের মাসিক পরীক্ষাসংক্রান্ত একটি গুরুত্বপূর্ণ নোটিশ জানানো হলো।",
    },
    {
      id: 2,
      date: "2025-10-30",
      content:
        "প্রিয় অভিভাবক, আশা করি আপনারা সবাই ভালো আছেন। আপনার সন্তানদের নিয়মিত উপস্থিতি নিশ্চিত করার জন্য অনুরোধ জানানো হচ্ছে।",
    },
    {
      id: 3,
      date: "2025-10-30",
      content:
        "প্রিয় অভিভাবক, আগামী সপ্তাহে অভিভাবক সভা অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিতি কাম্য।",
    },
  ];

  const filteredNotices = searchTerm
    ? notices.filter((n) =>
        n.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : notices;

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="text-xl text-gray-700">
          ←
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Notice</h1>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-sm">
        <input
          type="text"
          placeholder="Search notice..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Notice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-[10px] font-bold text-yellow-700">
                  NOTICE
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Announcement
                </h3>
                <p className="text-xs text-gray-500">
                  Teacher: Delwar hussan
                </p>
                <p className="text-xs text-gray-400">
                  {notice.date}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
              {notice.content}
            </p>

            <button
              onClick={() => navigate(`/notice/${notice.id}`)}
              className="text-sm text-blue-600 font-medium mb-4 self-start"
            >
              Read More...
            </button>

            {/* Footer */}
            <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>👁 32</span>
              <span>💬 54 Comment</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticePage;
