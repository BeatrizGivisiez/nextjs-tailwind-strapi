// App.tsx
"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { debounce } from "lodash";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Pagination from "../components/Pagination";
import { NewsArticle } from "@/hooks/useNews";

export const NoticiasPage: React.FC<{ items: NewsArticle[] }> = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState<NewsArticle[]>(items);
  const [filter, setFilter] = useState<string>("");
  const [viewMode, setViewMode] = useState<string>("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  // Pagination
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChangeView = (view: string) => {
    setViewMode(view);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
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
      <ItemList items={paginatedItems} viewMode={viewMode} />

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
