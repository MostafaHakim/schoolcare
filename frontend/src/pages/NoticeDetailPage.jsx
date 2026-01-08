import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Eye, Send } from "lucide-react";

const NoticeDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [comment, setComment] = useState("");

  // mock data (PNG অনুযায়ী)
  const notice = {
    title: "Announcement",
    teacher: "Teacher. Delwar hussan",
    date: "30-Oct-2025",
    views: 32,
    comments: 54,
    content: `প্রিয় অভিভাবক,

আশা করছি আপনারা সবাই ভালো আছেন। আপনার সন্তানের মাসিক ফি পরিশোধের জন্য নির্ধারিত হয়েছে। অনুগ্রহ করে নির্ধারিত সময়ের মধ্যে ফি প্রদান করে শিক্ষার্থীদের পড়াশোনা কার্যক্রম যেন নির্বিঘ্নে চলতে পারে তা নিশ্চিত করুন।

যদি ইতিমধ্যে ফি প্রদান করে থাকেন, তাহলে এই বার্তাটি উপেক্ষা করুন। ফি প্রদান সংক্রান্ত কোনো প্রশ্ন বা সহায়তার প্রয়োজন হলে আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন।

আপনাদের সহযোগিতা ও আস্থার জন্য আন্তরিক ধন্যবাদ।`,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Notice</h1>
      </div>

      {/* Notice Card */}
      <div className="bg-white rounded-2xl border p-4 space-y-4">
        {/* Top Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-700">NOTICE</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">
              {notice.title}
            </h2>
            <p className="text-sm text-gray-500">
              {notice.teacher}
            </p>
            <p className="text-xs text-gray-400">
              {notice.date}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
          {notice.content}
        </div>

        {/* Views & Comments */}
        <div className="flex items-center justify-between border rounded-xl px-4 py-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Eye size={18} />
            <span>{notice.views}</span>
          </div>
          <div>
            {notice.comments} Comment
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800">Comment</h3>
          <span className="text-gray-400 text-sm">01</span>
        </div>

        {/* Single Comment (PNG অনুযায়ী) */}
        <div className="bg-white border rounded-2xl p-4 flex gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
            T
          </div>
          <div>
            <p className="font-medium text-gray-800">
              Taskia jannat Iva
            </p>
            <p className="text-xs text-gray-400 mb-2">
              1 Hour
            </p>
            <p className="text-sm text-gray-700">
              স্যার আমি ক্লিয়ার বুঝতে পারিনি, আমাকে একটু ক্লিয়ার করে বলুন
            </p>
          </div>
        </div>
      </div>

      {/* Comment Input (Bottom Fixed) */}
        <div className="border-t px-4 py-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 text-sm px-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button className="bg-purple-500 p-2 rounded-lg text-white">
            <Send size={18} />
          </button>
        </div>
    </div>
  );
};

export default NoticeDetailPage;
