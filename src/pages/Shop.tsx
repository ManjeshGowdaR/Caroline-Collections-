import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, ChevronDown, Grid3X3, LayoutList, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const category = searchParams.get("category");
    return category ? [category] : [];
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const occasions = useMemo(() => {
    const allOccasions = products.flatMap((p) => p.occasion);
    return [...new Set(allOccasions)];
  }, []);

  const materials = useMemo(() => {
    const allMaterials = products.map((p) => p.material);
    return [...new Set(allMaterials)];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (selectedOccasions.length > 0) {
      filtered = filtered.filter((p) =>
        p.occasion.some((o) => selectedOccasions.includes(o))
      );
    }

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => selectedMaterials.includes(p.material));
    }

    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered = [...filtered].sort(
          (a, b) =>
            (b.tags.includes("New Arrival") ? 1 : 0) -
            (a.tags.includes("New Arrival") ? 1 : 0)
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [
    selectedCategories,
    priceRange,
    selectedOccasions,
    selectedMaterials,
    sortBy,
  ]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion)
        ? prev.filter((o) => o !== occasion)
        : [...prev, occasion]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 30000]);
    setSelectedOccasions([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const activeFiltersCount =
    selectedCategories.length +
    selectedOccasions.length +
    selectedMaterials.length +
    (priceRange[0] > 0 || priceRange[1] < 30000 ? 1 : 0);

  const showPriceFilter = priceRange[0] > 0 || priceRange[1] < 30000;

  return (
    <div className="min-h-screen bg-[#F8F6F1] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mt-8 mb-4">
          <h1 className="text-2xl font-serif font-bold text-[#1E3D31] mb-2">
            Shop All Products
          </h1>
          <p className="text-[#7CB69D]">
            Discover our collection of {filteredProducts.length} exquisite
            pieces
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm border border-[#7CB69D]/10">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden border-[#7CB69D] text-[#2D5A4A]"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-[#2D5A4A] text-white">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            <span className="text-[#7CB69D] hidden sm:inline">
              Showing {filteredProducts.length} products
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center border border-[#7CB69D]/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-[#2D5A4A] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-[#2D5A4A] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#7CB69D]/30 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A4A] focus:border-transparent text-[#2D5A4A]"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7CB69D] pointer-events-none" />
            </div>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-[#7CB69D]">Active filters:</span>
            {selectedCategories.map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="cursor-pointer hover:bg-[#7CB69D]/20 bg-[#7CB69D]/10 text-[#2D5A4A]"
                onClick={() => toggleCategory(cat)}
              >
                {cat === "saree" ? "Sarees" : "Kurtis"}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
            {selectedOccasions.map((occ) => (
              <Badge
                key={occ}
                variant="secondary"
                className="cursor-pointer hover:bg-[#7CB69D]/20 bg-[#7CB69D]/10 text-[#2D5A4A]"
                onClick={() => toggleOccasion(occ)}
              >
                {occ}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
            {selectedMaterials.map((mat) => (
              <Badge
                key={mat}
                variant="secondary"
                className="cursor-pointer hover:bg-[#7CB69D]/20 bg-[#7CB69D]/10 text-[#2D5A4A]"
                onClick={() => toggleMaterial(mat)}
              >
                {mat}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
            {showPriceFilter && (
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-[#7CB69D]/20 bg-[#7CB69D]/10 text-[#2D5A4A]"
                onClick={() => setPriceRange([0, 30000])}
              >
                Rs.{priceRange[0]} - Rs.{priceRange[1]}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-[#2D5A4A] hover:text-[#C9A86A] ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          <aside
            className={`
            fixed lg:sticky lg:top-24 inset-y-0 left-0 z-50 
            w-80 bg-white lg:bg-transparent
            transform transition-transform duration-300 lg:transform-none
            ${
              isFilterOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            overflow-y-auto
            lg:h-[calc(100vh-6rem)]
            lg:w-64 flex-shrink-0
          `}
          >
            <div className="bg-white lg:bg-transparent p-6 lg:p-0 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-semibold text-[#1E3D31]">
                  Filters
                </h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-6 w-6 text-[#2D5A4A]" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#1E3D31] mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox
                      checked={selectedCategories.includes("saree")}
                      onCheckedChange={() => toggleCategory("saree")}
                      className="border-[#7CB69D] data-[state=checked]:bg-[#2D5A4A] data-[state=checked]:border-[#2D5A4A]"
                    />
                    <span className="text-gray-700">Sarees</span>
                    <span className="text-[#7CB69D] text-sm ml-auto">
                      ({products.filter((p) => p.category === "saree").length})
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox
                      checked={selectedCategories.includes("kurti")}
                      onCheckedChange={() => toggleCategory("kurti")}
                      className="border-[#7CB69D] data-[state=checked]:bg-[#2D5A4A] data-[state=checked]:border-[#2D5A4A]"
                    />
                    <span className="text-gray-700">Kurtis</span>
                    <span className="text-[#7CB69D] text-sm ml-auto">
                      ({products.filter((p) => p.category === "kurti").length})
                    </span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#1E3D31] mb-4">
                  Price Range
                </h3>
                <Slider
                  value={priceRange}
                  onValueChange={(value) =>
                    setPriceRange(value as [number, number])
                  }
                  max={30000}
                  step={500}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-[#7CB69D]">
                  <span>Rs.{priceRange[0]}</span>
                  <span>Rs.{priceRange[1]}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#1E3D31] mb-4">Occasion</h3>
                <div className="space-y-3">
                  {occasions.map((occasion) => (
                    <label
                      key={occasion}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedOccasions.includes(occasion)}
                        onCheckedChange={() => toggleOccasion(occasion)}
                        className="border-[#7CB69D] data-[state=checked]:bg-[#2D5A4A] data-[state=checked]:border-[#2D5A4A]"
                      />
                      <span className="text-gray-700">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#1E3D31] mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label
                      key={material}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={() => toggleMaterial(material)}
                        className="border-[#7CB69D] data-[state=checked]:bg-[#2D5A4A] data-[state=checked]:border-[#2D5A4A]"
                      />
                      <span className="text-gray-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                className="w-full lg:hidden bg-[#2D5A4A] text-white hover:bg-[#1E3D31]"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </aside>

          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-[#7CB69D] mb-4">No products found</p>
                <p className="text-gray-400 mb-6">Try adjusting your filters</p>
                <Button
                  onClick={clearFilters}
                  className="bg-[#2D5A4A] text-white hover:bg-[#1E3D31]"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={`
                grid gap-6
                ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                }
              `}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
