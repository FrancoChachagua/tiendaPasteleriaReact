import { memo } from 'react'
import Item from './Item'

const ItemList = memo(
    ({productos}) => {
        return (
            <>
                {productos.map(prod=> <Item prod={prod}/>
                )}
            </>
        )
    }
, (oldProps, newProp) => oldProps.productos.length === newProp.productos.length)


export default ItemList
