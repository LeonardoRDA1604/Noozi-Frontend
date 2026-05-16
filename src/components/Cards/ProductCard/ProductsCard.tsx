import arrozRice from "@/assets/images/arrozRice.png";
import type { CardItems } from "@/types/CardItems";

const mockItems: CardItems[] = [
  {
    id: 1,
    nameItem: "Arroz Integral 5kg",
    imageItem: arrozRice,
    expirationDate: "12/08",
    itemValue: 32.9,
    itemQuantity: 50,
  },
  {
    id: 2,
    nameItem: "Feijão Carioca 1kg",
    imageItem: arrozRice,
    expirationDate: "30/09",
    itemValue: 8.5,
    itemQuantity: 120,
  },
  {
    id: 3,
    nameItem: "Azeite Extra Virgem 500ml",
    imageItem: arrozRice,
    expirationDate: "15/01",
    itemValue: 45.0,
    itemQuantity: 30,
  },
  {
    id: 4,
    nameItem: "Leite Integral 1L",
    imageItem: arrozRice,
    expirationDate: "05/08",
    itemValue: 5.99,
    itemQuantity: 200,
  },
  {
    id: 5,
    nameItem: "Café Torrado 250g",
    imageItem: arrozRice,
    expirationDate: "20/11",
    itemValue: 12.75,
    itemQuantity: 80,
  },
  {
    id: 6,
    nameItem: "Macarrão Espaguete 500g",
    imageItem: arrozRice,
    expirationDate: "10/06",
    itemValue: 4.2,
    itemQuantity: 95,
  },
  {
    id: 7,
    nameItem: "Molho de Tomate 340g",
    imageItem: arrozRice,
    expirationDate: "18/03",
    itemValue: 3.5,
    itemQuantity: 140,
  },
  {
    id: 8,
    nameItem: "Farinha de Trigo 1kg",
    imageItem: arrozRice,
    expirationDate: "22/07",
    itemValue: 6.8,
    itemQuantity: 60,
  },
  {
    id: 9,
    nameItem: "Açúcar Refinado 2kg",
    imageItem: arrozRice,
    expirationDate: "01/12",
    itemValue: 9.9,
    itemQuantity: 75,
  },
  {
    id: 10,
    nameItem: "Sal Grosso 1kg",
    imageItem: arrozRice,
    expirationDate: "14/09",
    itemValue: 2.3,
    itemQuantity: 180,
  },
  {
    id: 11,
    nameItem: "Óleo de Soja 900ml",
    imageItem: arrozRice,
    expirationDate: "08/04",
    itemValue: 7.6,
    itemQuantity: 55,
  },
  {
    id: 12,
    nameItem: "Manteiga com Sal 200g",
    imageItem: arrozRice,
    expirationDate: "03/08",
    itemValue: 11.4,
    itemQuantity: 40,
  },
  {
    id: 13,
    nameItem: "Iogurte Natural 170g",
    imageItem: arrozRice,
    expirationDate: "28/07",
    itemValue: 3.2,
    itemQuantity: 90,
  },
  {
    id: 14,
    nameItem: "Queijo Mussarela 400g",
    imageItem: arrozRice,
    expirationDate: "16/08",
    itemValue: 22.0,
    itemQuantity: 25,
  },
  {
    id: 15,
    nameItem: "Presunto Fatiado 200g",
    imageItem: arrozRice,
    expirationDate: "11/08",
    itemValue: 14.5,
    itemQuantity: 35,
  },
  {
    id: 16,
    nameItem: "Biscoito Cream Cracker 200g",
    imageItem: arrozRice,
    expirationDate: "25/10",
    itemValue: 5.1,
    itemQuantity: 110,
  },
  {
    id: 17,
    nameItem: "Achocolatado em Pó 400g",
    imageItem: arrozRice,
    expirationDate: "19/02",
    itemValue: 16.3,
    itemQuantity: 65,
  },
  {
    id: 18,
    nameItem: "Vinagre de Maçã 750ml",
    imageItem: arrozRice,
    expirationDate: "07/05",
    itemValue: 8.9,
    itemQuantity: 45,
  },
  {
    id: 19,
    nameItem: "Extrato de Tomate 130g",
    imageItem: arrozRice,
    expirationDate: "13/12",
    itemValue: 2.8,
    itemQuantity: 160,
  },
  {
    id: 20,
    nameItem: "Caldo de Legumes 57g",
    imageItem: arrozRice,
    expirationDate: "29/01",
    itemValue: 4.7,
    itemQuantity: 100,
  },
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
    <>
      <div className="flex items-center gap-7 border-l-4 border-l-[#1752FD] rounded-3xl shadow-md bg-gray-100 h-[20vh] w-[50vh] p-4 m-4">
        <img
          className="w-[30%] h-[90%] rounded-2xl object-cover"
          src={item.imageItem}
          alt="Imag-Product"
        />

        <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-x-2 gap-y-2 w-full h-full py-2">
          <div className="col-span-2 flex items-start justify-between">
            <div>
              <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Marca</p>
              <p className="text-[1.9vh] font-bold">{item.nameItem}</p>
            </div>
            <div className="w-[2.8vh] h-[2.8vh] shrink-0 rounded-full bg-green-400 border-2 border-green-200 shadow-lg shadow-green-400/50 mt-1" />
          </div>

          <div className="col-span-2" />

          <div>
            <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Preço</p>
            <p className="text-[1.8vh] font-bold">R$ {item.itemValue}</p>
          </div>
          <div>
            <p className="text-[1.9vh] font-medium text-[#9F9F9F]">Quantidade</p>
            <p className="text-[1.9vh] font-bold">{item.itemQuantity} un.</p>
          </div>
        </div>
      </div>
    </>
  );
}
