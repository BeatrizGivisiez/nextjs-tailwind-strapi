// Pagination.tsx
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const NoticiasPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-4 flex justify-end items-center gap-4">
      <span className="text-primary text-base">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        <CaretLeft
          size={22}
          color={
            currentPage === 1
              ? "var(--color-primary-disabled)"
              : "var(--color-primary)"
          }
          weight="bold"
        />
      </button>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Next"
      >
        <CaretRight
          size={22}
          color={
            currentPage === totalPages
              ? "var(--color-primary-disabled)"
              : "var(--color-primary)"
          }
          weight="bold"
        />
      </button>
    </div>
  );
};

export default NoticiasPagination;
