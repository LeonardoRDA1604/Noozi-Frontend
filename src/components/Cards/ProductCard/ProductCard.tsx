import arrozRice from "@/assets/images/arrozRice.png";
import type { CardItems } from "@/types/CardItems.ts";


const mockItems: CardItems[] = [
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },{ id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
  { id: 1, nameItem: "HMMM", imageItem: arrozRice, expirationDate: "24/07", itemValue: 20, itemQuantity: 15 },
];

export default function CreateCardItem() {
  return (
    <div className="flex flex-wrap gap-10 mx-12 py-12 justify-items-center justify-center">
      {mockItems.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function CardItem({ item }: { item: CardItems }) {
  return (
    <div className="w-[190px] bg-[#2f5be7] p-3 rounded-[18px] text-white shadow-lg shadow-black/30">
      <div className="flex justify-center">
        <div className="w-full h-[130px] p-1 bg-white rounded-[12px]">
          <img className="w-[100%] h-[100%] rounded-[12px]" src={item.imageItem} alt="imagemDoProduto" />
        </div>
      </div>

      <h3 className="text-center truncate max-w-[200px] m-4 font-bold text-[16px]">{item.nameItem}</h3>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
          <span>Val.</span>
          <span className="font-bold truncate max-w-[80px] text-[18px]">{item.expirationDate}</span>
        </div>
        <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
          <span>Preço</span>
          <span className="font-bold truncate max-w-[80px] text-[18px]">{item.itemValue.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
          <span>Qntd.</span>
          <span className="font-bold truncate max-w-[80px] text-[18px]">{item.itemQuantity}</span>
        </div>
      </div>
    </div>
  );
}