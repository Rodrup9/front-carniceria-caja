import { useLocation } from "react-router-dom"
import { getOrderByNumber } from "../helpers"
import queryString from "query-string";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CardProduct, ContentCards, NoteOrderView } from "../components";

export const OrderView = () => {

    const { orders } = useSelector( state => state.orders );

    const location = useLocation();

    const { number = '' } = queryString.parse(location.search);
    
    const data = useMemo( () => getOrderByNumber( number, orders ), [ number ]);

    if ( !data || !data.products ) return (<p>Error</p>) ;

    const total = data.products.reduce(( acc, cur ) => acc + parseFloat(cur.price), 0);

    return (
        <div className="orderView">
            <NoteOrderView { ...data } total={ total } />

            <div className="orderViewListProducts" >
                {
                    data.products.map( product => (
                        <CardProduct key={ product.id } number={ number } { ...product } />
                    ))
                }
            </div>
        </div>
    )
}
