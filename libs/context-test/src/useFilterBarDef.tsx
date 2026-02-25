import { useDefaultAssetFilterBarDefinition } from '@trackunit/filters-asset-filter-definitions';
import { FilterStateValues, useFilterBar } from '@trackunit/filters-filter-bar';
import { useMemo } from 'react';

function useCustomAssetsFilterBarDefinition() {
  const {
    search,
    siteIds,
    groups,
    brands,
    models,
    types,
    siteType,
    productionYears,
  } = useDefaultAssetFilterBarDefinition({
    sitesEnabled: true,
    owningDepotEnabled: false,
    serviceManagementEnabled: false,
    areaShowWithSearch: false,
    showHiddenAssetsEnabled: true,
    ownerFilterDefaultValue: [],
  });

  return useMemo(() => {
    return {
      search,
      siteIds,
      groups,
      brands,
      models,
      types,
      siteType,
      productionYears,
    };
  }, [
    search,
    siteIds,
    groups,
    brands,
    models,
    types,
    siteType,
    productionYears,
  ]);
}

export function useAssetsFilterBar() {
  const customAssetsFilterBarDefinition = useCustomAssetsFilterBarDefinition();

  return useFilterBar({
    name: 'filterTest',
    filterBarDefinition: customAssetsFilterBarDefinition,
  });
}

export type CustomAssetsFilterBarType = ReturnType<typeof useAssetsFilterBar>;

export type CustomAssetsFilterBarDefinition = ReturnType<
  typeof useCustomAssetsFilterBarDefinition
>;

export type CustomAssetsFilterValues =
  FilterStateValues<CustomAssetsFilterBarDefinition>;
