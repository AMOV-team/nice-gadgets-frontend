import { Scale } from 'lucide-react';

type Props = {
  className?: string;
  count?: number;
};

export const CompareIconCounter: React.FC<Props> = ({
  className = '',
  count = 0,
}) => {
  return (
    <div
      className={`relative w-[28px] h-[28px] flex items-center justify-center ${className}`}
    >
      <Scale
        className={`${className}`}
        size={16}
      />
      {count > 0 && (
        <span
          className="absolute top-[0px] right-[-8px] w-[15px] h-[15px] 
            bg-custom-accent text-white text-[7px] leading-[15px] 
              font-mont font-semibold rounded-full text-center 
              border border-white"
        >
          {count}
        </span>
      )}
    </div>
  );
};
