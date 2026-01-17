const StatCard = ({ title, value, icon: Icon, footer, children, order }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 space-y-3 ${order}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xs sm:text-sm text-gray-500">{title}</p>

        {Icon && (
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-100 flex items-center justify-center">
            <Icon size={16} className="text-purple-600" />
          </div>
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {value}
      </h3>

      {children}

      {footer && <p className="text-xs text-green-500">{footer}</p>}
    </div>
  );
};

export default StatCard;
