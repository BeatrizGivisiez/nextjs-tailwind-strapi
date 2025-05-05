"use client";

import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../../components/Content/Header";
import ContentItemList from "../../../components/Content/ItemList";
import Pagination from "../../../components/Content/Pagination";
import { NewsArticle } from "@/hooks/News/useNews";

interface NoticiasPageProps {
  items: NewsArticle[];
  onPageChange: (newPage: number) => void;
  onTitleChange?: (title: string) => void; // New prop
}

export const NoticiasPage: React.FC<NoticiasPageProps> = ({
  items,
  onTitleChange,
}) => {
  const searchParams = useSearchParams();
  const isDestaquesView = searchParams.get("destaques") === "true";

  const title = isDestaquesView ? "Destaques" : "Notícias";

  const [filter, setFilter] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<NewsArticle[]>([]);
  const [viewMode, setViewMode] = useState<string>("grid");
  const [localPage, setLocalPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title); // Send title up to parent
    }
  }, [onTitleChange, title]);

  useEffect(() => {
    let baseItems = isDestaquesView
      ? items.filter((item) => item.Destaque === true)
      : items;

    if (filter) {
      baseItems = baseItems.filter((item) =>
        item.Titulo.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    setFilteredItems(baseItems);
    setLocalPage(1);
  }, [items, filter, isDestaquesView]);

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
  console.log("paginatedItems", items);

  return (
    <div className="mt-9">
      <Header
        resultsCount={filteredItems.length}
        filter={filter}
        onFilterChange={handleFilterChange}
        onChangeView={handleChangeView}
        viewMode={viewMode}
      />

      <ContentItemList items={paginatedItems} viewMode={viewMode} />

      <div className="mt-6">
        <Pagination
          currentPage={localPage}
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
          onPageChange={setLocalPage}
        />
      </div>
    </div>
  );
};
