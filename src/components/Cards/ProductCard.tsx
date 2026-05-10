import arrozRice from "@/assets/images/arrozRice.png";

interface Items {
  id: number;
  nameItem: string;
  imageItem: string;
  expirateDate: string;
  itemValue: number;
  itemQuantity: number;
}

export default function CreateCardItem() {
  let item1: Items = {
    id: 1,
    nameItem: "1234567890123456",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15,
  };
  let item2: Items = {
    id: 2,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15,
  };
  let item3: Items = {
    id: 3,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15,
  };
  let item4: Items = {
    id: 3,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "25/07",
    itemValue: 20,
    itemQuantity: 10203820942,
  };
  const itens: Items[] = [item1, item2, item3, item4];

  return (
    <>
      <div className="flex flex-wrap gap-10 py-12 justify-items-center justify-center">
        {CardItem(itens)}
      </div>
    </>
  );
}

function CardItem(items: Items[]) {
  return (
    <>
      {items.map((itens: Items) => (
        <div key={itens.id}>
          <div className="w-[190px] bg-[#2f5be7] p-3 rounded-[18px] text-white shadow-lg shadow-black/30">
            <div className="flex justify-center">
              <div className="w-full h-[130px]  p-1 bg-white rounded-[12px]">
                <img
                  className="w-[100%] h-[100%] rounded-[12px]"
                  src={itens.imageItem}
                  alt="imagemDoProduto"
                />
              </div>
            </div>

            <h3 className="text-center truncate max-w-[200px] m-4 font-bold text-[16px]">{itens.nameItem}</h3>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
                <span>Val.</span>
                <span className="font-bold truncate max-w-[80px] text-[18px]">
                  {itens.expirateDate}
                </span>
              </div>
              <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
                <span>Preço</span>
                <span className="font-bold truncate max-w-[80px] text-[18px]">
                  {itens.itemValue.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pr-2 gap-14 text-[12px]">
                <span>Qntd.</span>
                <span className="font-bold truncate max-w-[80px] text-[18px]">
                  {itens.itemQuantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
