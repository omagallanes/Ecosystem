import { useState, useMemo } from 'react';
import Header from '@/shared/components/Header';
import FilterBar from '../components/FilterBar';
import StartupGrid from '../components/StartupGrid';
import Pagination from '@/shared/components/Pagination';
import Footer from '@/shared/components/Footer';
import categoriesData from '@/data/startup_categories.json';
import startupsData from '@/data/startups.json';
import type { Category, Startup } from '../types';
import type { SortOrder } from '@/shared/types';

const categories: Category[] = categoriesData;
const startups: Startup[] = startupsData;

const ITEMS_PER_PAGE = 9;

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract only used categories from startups
  const usedCategories = useMemo(() => {
    const usedCategoryIds = new Set(
      startups.flatMap((startup) => startup.categoryIds)
    );
    return categories.filter((category) => usedCategoryIds.has(category.id));
  }, []);

  const filteredAndSortedStartups = useMemo(() => {
    let result = [...startups];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((startup) =>
        startup.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((startup) => startup.categoryIds.includes(selectedCategory));
    }

    // Sort by founded year
    result.sort((a, b) => {
      return sortOrder === 'desc'
        ? b.foundedYear - a.foundedYear
        : a.foundedYear - b.foundedYear;
    });

    return result;
  }, [selectedCategory, sortOrder, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedStartups.length / ITEMS_PER_PAGE);
  const paginatedStartups = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedStartups.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedStartups, currentPage]);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-4 sm:py-6 px-4 sm:px-6">
        <Header />
        
        <section className="space-y-4 sm:space-y-6">
          <FilterBar
            categories={usedCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            totalCount={startups.length}
            filteredCount={filteredAndSortedStartups.length}
          />
          
          <StartupGrid
            startups={paginatedStartups}
            categories={categories}
            onClearFilters={handleClearFilters}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;

