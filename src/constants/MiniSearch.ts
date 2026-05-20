import MiniSearch from "minisearch";

export const structureSearch = new MiniSearch({
      idField: 'id_product',
      fields: [
        'id_product',
        'sku',
        'name',
        'category',
        'brand',
    ],
      storeFields: [
        'id_product',
        'sku',
        'name',
        'category',
        'brand',
        'item_price',
        'stock_quantity',
        'expiration_date'
    ],
      searchOptions: {
        prefix: true,
        fuzzy: 0.3,
      }
    });