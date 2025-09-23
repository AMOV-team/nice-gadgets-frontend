import React from 'react';
import { PaginationButton } from '../../atoms/buttons/PaginationButton';
import { ArrowLeftIcon } from '../../atoms/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../atoms/icons/ArrowRightIcon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  let start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, start + 3);
  if (end - start < 3) start = Math.max(1, end - 3);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="col-span-full flex justify-center mt-6">
      <div className="flex gap-2">
        {currentPage > 1 && totalPages > 4 && (
          <PaginationButton
            selected={false}
            onSelect={() => onPageChange(currentPage - 1)}
          >
            <ArrowLeftIcon />
          </PaginationButton>
        )}

        {pages.map((p) => (
          <PaginationButton
            key={p}
            selected={p === currentPage}
            onSelect={() => onPageChange(p)}
          >
            {p.toString()}
          </PaginationButton>
        ))}

        {currentPage < totalPages && totalPages > 4 && (
          <PaginationButton
            selected={false}
            onSelect={() => onPageChange(currentPage + 1)}
          >
            <ArrowRightIcon />
          </PaginationButton>
        )}
      </div>
    </div>
  );
};
