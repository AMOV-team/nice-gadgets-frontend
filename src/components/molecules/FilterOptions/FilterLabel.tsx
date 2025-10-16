import React from 'react';

type Props = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const FilterLabel: React.FC<Props> = ({ text, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none relative">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <div
        className={`
          w-4 h-4 rounded-md flex items-center justify-center
          p-[1px]
          border border-elements
          transition-colors duration-150
          peer-checked:bg-custom-accent peer-checked:border-custom-accent
          outline-none
        `}
        aria-hidden="true"
      >
        {checked && (
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
          </svg>
        )}
      </div>

      <span className="text-base">{text}</span>
    </label>
  );
};
