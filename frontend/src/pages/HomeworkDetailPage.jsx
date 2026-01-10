import { ArrowLeft, Eye, MessageCircle, Send, Download } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useHomework } from "../contexts/HomeworkContext";
import { useEffect } from "react";

const HomeworkDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { fetchHomeworksById, homeworkById } = useHomework();

  useEffect(() => {
    if (id) {
      fetchHomeworksById(id);
    }
  }, [id]);

  console.log(homeworkById);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-3 py-4">
      <div className="w-full  bg-white rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <h2 className="text-sm font-medium">Homework details</h2>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={homeworkById[0]?.image}
            alt="Homework"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <button className="absolute top-3 right-3 bg-white p-2 rounded-lg shadow">
            <Download size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3">
          {/* Bangla Description */}
          <p className="text-sm text-gray-800 leading-relaxed">
            {homeworkById[0]?.details}
          </p>

          {/* Stats */}
          <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>32</span>
            </div>

            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>54 Comment</span>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="border-t px-4 py-4 space-y-3">
          <p className="text-xs text-gray-500">01</p>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-semibold">
              T
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">Taskia jannat Iva</p>
              <p className="text-xs text-gray-400">1 Hour</p>
              <p className="text-sm text-gray-700 mt-1">
                স্যার আমি কালকে লিখবো, আজকে একটু কাজ আছে ddddd
              </p>
            </div>
          </div>
        </div>

        {/* Comment Input */}
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
    </div>
  );
};

export default HomeworkDetailPage;
