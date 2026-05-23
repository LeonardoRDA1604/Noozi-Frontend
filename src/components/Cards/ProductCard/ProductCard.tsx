import { useMemo, useState, useEffect } from 'react';
import type { filter } from '@/types/FilterSearchbar.types';
import { structureSearch } from '@/constants/MiniSearch';
import type { Product } from '@/types/Product.types';
import arrozRice from '../../../assets/images/arrozRice.png'
import { formatCurrency } from "@/utils/Currency";


export default function CreateCardItem({ filter, products }: filter) {

  const miniSearch = useMemo(() => structureSearch, []);

  const [filterDebouncado, setFilterDebouncado] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterDebouncado(filter);
    }, 200);

    return () => clearTimeout(timer);
  }, [filter]);

  const itemsFilter = useMemo(() => {
    if (!filterDebouncado) return products;

    const searchResults = miniSearch.search(filterDebouncado);
    if (searchResults.length === 0) return products;

    return searchResults
      .map(r => products.find(item => item.id_product === r.id_product))
      .filter(Boolean) as Product[];
  }, [filterDebouncado, miniSearch, products]);

  return (
    <div className="flex flex-wrap gap-10 mx-12 py-12 justify-items-center justify-center">
      {itemsFilter.map((item) => (
        <CardItem key={item.id_product} item={item} />
      ))}
    </div>
  );
}

function CardItem({ item }: { item: Product }) {
  return (
    <>
      <div className="flex items-center gap-7 border-l-4 border-l-[#1752FD] rounded-3xl shadow-md bg-gray-100 h-[20vh] w-[50vh] p-4 m-4">
        <img
          className="w-[30%] h-[90%] rounded-2xl object-cover"
          src={arrozRice}
          alt="Imag-Product"
        />

        <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-x-2 gap-y-2 w-full h-full py-2">
          <div className="col-span-2 flex items-start justify-between">
            <div>
              <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Marca</p>
              <p className="text-[1.9vh] font-bold">{item.name}</p>
            </div>
            <div className="w-[2.8vh] h-[2.8vh] shrink-0 rounded-full bg-green-400 border-2 border-green-200 shadow-lg shadow-green-400/50 mt-1" />
          </div>

          <div className="col-span-2" />

          <div>
            <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Preço</p>
            <p className="text-[1.8vh] font-bold">{formatCurrency(item.item_price)}</p>
          </div>
          <div>
            <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Quantidade</p>
            <p className="text-[1.9vh] font-bold">{item.stock_quantity} un.</p>
          </div>
        </div>
      </div>
    </>
  );
}
