const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
