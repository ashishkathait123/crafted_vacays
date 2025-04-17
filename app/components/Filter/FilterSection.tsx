import React from 'react';

const FilterSection = ({
  title,
  options = [],
  customContent,
  selectedOptions = [],
  onChange = () => {},
}: {
  title: string;
  options?: string[];
  customContent?: React.ReactNode;
  selectedOptions?: string[];
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">{title}</p>
      {customContent ? (
        customContent
      ) : (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions?.includes(option)}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
