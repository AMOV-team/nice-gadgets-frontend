import { OctagonX } from 'lucide-react';

type Props = {
  className?: string;
  error: string;
};

export const FormErrorMessage: React.FC<Props> = ({
  className = '',
  error,
}) => {
  return (
    <div
      className={`relative rounded-md w-auto h-auto p-[8px] flex items-start text-white bg-red dark:bg-rose-950 gap-[8px] ${className}`}
    >
      <OctagonX
        className={`${className} absolute bottom-[10px] right-[10px]`}
        size={16}
      />
      <span className="text-sm">{error}</span>
    </div>
  );
};
