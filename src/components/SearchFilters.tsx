import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  rating: number;
  setRating: (rating: number) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  selectedCategory,
  setSelectedCategory,
  rating,
  setRating,
}) => {
  const categories = [
    'All',
    'Drivers',
    'Mid-Range',
    'Putters',
    'Bags',
    'Accessories',
    'Snacks'
  ];

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm">
      <div>
        <Label htmlFor="search">Search Products</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search by name, description, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
        <Slider
          defaultValue={[0, 200]}
          max={200}
          step={1}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger id="category" className="mt-1">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="rating">Minimum Rating</Label>
        <Select
          value={rating.toString()}
          onValueChange={(value) => setRating(Number(value))}
        >
          <SelectTrigger id="rating" className="mt-1">
            <SelectValue placeholder="Select minimum rating" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <SelectItem key={value} value={value.toString()}>
                {value === 0 ? 'Any' : `${value} Stars`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchFilters;