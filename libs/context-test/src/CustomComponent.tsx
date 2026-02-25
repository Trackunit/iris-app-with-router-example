import { FilterBar } from '@trackunit/filters-filter-bar';
import { useAssetsFilterBar } from './useFilterBarDef';

export function CustomAssetsFiltersComponent() {
  const filterBar = useAssetsFilterBar();
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2">
      <FilterBar {...filterBar} />
    </div>
  );
}
