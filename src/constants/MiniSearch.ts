import MiniSearch from "minisearch";
import { mockItems } from "./MackItems";

export const structureSearch = new MiniSearch({
      fields: [
        'id',
        'nameItem',
        'expirationDate',
        'itemValue',
        'itemQuantity'
    ],
      storeFields: [
        'id',
        'nameItem',
        'imageItem',
        'expirationDate',
        'itemValue',
        'itemQuantity'
    ],
      searchOptions: {
        prefix: true,
        fuzzy: 0.3,
      }
    });

structureSearch.addAll(mockItems);