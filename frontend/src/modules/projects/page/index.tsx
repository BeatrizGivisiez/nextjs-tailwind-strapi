// App.tsx
"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { debounce } from "lodash";
import Header from "@/components/Content/Header";
import Pagination from "@/components/Content/Pagination";
import { NewsArticle } from "@/hooks/News/useNews";
import { ProjectsArticle } from "@/hooks/Projects/useProjects";
import ContentItemList from "@/components/Content/ItemList";

interface ProjectsPageProps {
  items: ProjectsArticle[];
  pageInfo: {
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
  };
  onPageChange: (newPage: number) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  items,
  pageInfo,
  onPageChange,
}) => {
  const [filteredItems, setFilteredItems] = useState<ProjectsArticle[]>(items);
  const [filter, setFilter] = useState<string>("");
  const [viewMode, setViewMode] = useState<string>("list");

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

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChangeView = (view: string) => {
    setViewMode(view);
  };

  return (
    <div className="mt-9">
      {/* Header Component */}
      <Header
        resultsCount={filteredItems.length}
        filter={filter}
        onFilterChange={handleFilterChange}
        onChangeView={handleChangeView}
        viewMode={viewMode}
      />

      {/* Main Content */}
      <ContentItemList items={filteredItems} viewMode={viewMode} />

      {/* Pagination Component */}
      <Pagination
        currentPage={pageInfo.page}
        totalPages={pageInfo.pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};
