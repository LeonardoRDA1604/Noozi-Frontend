import arrozRice from '@/assets/images/arrozRice.png'
import './algo.css'
// Isto ainda precisa melhorar para a separação dos itens de "CardItem", será necessário a implementação da leitura do Json
// Next Tasks 10.05.2026:
// Implementar toda a parte do Tailwind (Incluindo o Grid)
// Implementar a Leitura do Json por parte da função CardItem
// And Implement the SearchBar on the screen w/o affecting the grid (probably will change this part of "affect")

interface Items {
  id: number;
  nameItem: string;
  imageItem: string;
  expirateDate: string;
  itemValue: number;
  itemQuantity: number;
}

export default function CreateCardItem() {

  let item1 : Items = {
    id: 1,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15
  }
  let item2 : Items = {
    id: 2,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15
  }
  let item3 : Items = {
    id: 3,
    nameItem: "algo",
    imageItem: arrozRice,
    expirateDate: "24/07",
    itemValue: 20,
    itemQuantity: 15
  }
  const itens: Items[] = [ item1, item2, item3 ]

  return (
    <>
      <div className='grid-col gap-12px p-12px'>
        {CardItem(itens)}
      </div>
    </>
  )
}

function CardItem( items : Items[] ) {
  return (
    <>
    {items.map( (itens : Items) => (
      
      <div key={itens.id}>

        <div className='ContainerCard'>

          <div className='productImage'>
            <img src={itens.imageItem} alt="imagemDoProduto" />
          </div>

          <h3 className='nameItemCard'>{itens.nameItem}</h3>

          <div className='itemContent'>
            <div className='infoProduct'>
              <p>Validade</p>
              <p>{itens.expirateDate}</p>
            </div>
            <div className='infoProduct'>
              <p>Valor.</p>
              <p>{itens.itemValue.toFixed(2)}</p>
            </div>
            <div className='infoProduct quantity'>
              <p>Quantidade</p>
              <p>{itens.itemQuantity} und.</p>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}


