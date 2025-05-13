"use client";

import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import { debounce } from "lodash";
import Header from "@/components/Content/Header";
import Pagination from "@/components/Content/Pagination";
import { PaginationMeta, ProjectsArticle } from "@/hooks/Projects/useProjects";
import ContentItemList from "@/components/Content/ItemList";

interface ProjectsPageProps {
  items: ProjectsArticle[];
  pageInfo: PaginationMeta;
  onPageChange: (newPage: number) => void;
  defaultviewMode?: string,
  header: boolean,
  footer: boolean,
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  items,
  pageInfo,
  onPageChange,
  defaultviewMode = "list",
  header = true,
  footer = true
}) => {
  const [filteredItems, setFilteredItems] = useState<ProjectsArticle[]>(items);
  const [filter, setFilter] = useState<string>("");
  const [viewMode, setViewMode] = useState<string>(defaultviewMode);

  const [localPage, setLocalPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Debounced filter handler
  const debouncedFilter = debounce((filterText: string) => {
    const filtered = items.filter((item) =>
      item.Titulo.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredItems(filtered);
  }, 500);

  useEffect(() => {
    debouncedFilter(filter);
    return () => debouncedFilter.cancel();
  }, [filter]);

  useEffect(() => {
    setFilteredItems(items);
    setLocalPage(1);
  }, [items, filter]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChangeView = (view: string) => {
    setViewMode(view);
  };

  const paginatedItems = useMemo(() => {
    const startIndex = (localPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, localPage]);

  return (
    <div className="mt-9">
      {header && (
        <Header
          resultsCount={paginatedItems.length}
          filter={filter}
          onFilterChange={handleFilterChange}
          onChangeView={handleChangeView}
          viewMode={viewMode}
        />

      )}

      <ContentItemList items={paginatedItems} viewMode={viewMode} />

      {/* Local pagination: 10 items per page */}
      {footer && (
        <Pagination
          currentPage={localPage}
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
          onPageChange={setLocalPage}
        />
      )}
    </div>
  );
};
