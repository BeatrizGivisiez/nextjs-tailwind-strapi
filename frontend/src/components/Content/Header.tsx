// Header.tsx
import { GridNine, List, Slideshow } from "@phosphor-icons/react";
import React from "react";

interface Props {
  resultsCount: number;
  filter: string;
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeView: (view: string) => void;
  viewMode: string;
}

const ContentListHeader: React.FC<Props> = ({
  resultsCount,
  filter,
  onFilterChange,
  onChangeView,
  viewMode,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-primary font-semibold">{resultsCount} Results</div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Search by title"
          className="input"
        />
        <div className="flex gap-2">
          <button
            className="cursor-pointer"
            aria-label="Grid"
            onClick={() => onChangeView("grid")}
          >
            <GridNine
              size={28}
              color={
                viewMode === "grid"
                  ? "var(--color-primary)"
                  : "var(--color-primary-disabled)"
              }
              weight="fill"
            />
          </button>
          <button
            className="cursor-pointer"
            aria-label="List"
            onClick={() => onChangeView("list")}
          >
            <List
              size={28}
              color={
                viewMode === "list"
                  ? "var(--color-primary)"
                  : "var(--color-primary-disabled)"
              }
              weight="bold"
            />
          </button>
          <button
            className="cursor-pointer"
            aria-label="Carousel"
            onClick={() => onChangeView("carousel")}
          >
            <Slideshow
              size={28}
              color={
                viewMode === "carousel"
                  ? "var(--color-primary)"
                  : "var(--color-primary-disabled)"
              }
              weight="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentListHeader;
