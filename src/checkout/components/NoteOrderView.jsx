
export const NoteOrderView = ({ number, products, date, hour, total }) => {

    return (
        <div className="noteOrderView">
            <div className="noteOrderViewNumber">
                <h2 >Orden <span>{ number }</span></h2>
            </div>
            
            <div className="noteOrderViewDetails">
                <div className="">
                    <h2>Detalles</h2>
                    <div className="noteOrderViewDetailsBody">
                        <div className="">
                        <p>Producto</p>
                        <p>Cantidad</p>
                        <p>Desto.</p>
                        <p>Precio</p>
                        <p>PcD</p>
                        </div>

                        {
                            products.map( product =>
                                <div key={ product.id } className="">
                                    <p>{ product.name }</p>
                                    <p>{ product.amount.amount.toFixed() }<span>{ product.amount.unit }</span></p>
                                    <p>{ product.discount }<span>%</span></p>
                                    <p><span>$</span>{ product.price.toFixed(2) }</p>
                                    <p><span>$</span>{ (product.price - ( product.price * ( product.discount / 100 ))).toFixed(2) }</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="noteOrderViewDetailsDetails">
                    <pre>{ date }</pre>
                    <pre>{ hour }</pre>
                </div>
            </div>
            <div className="noteOrderViewTotal">
                <h2>Total</h2>
                { total }
            </div>

            <div className="noteOrderViewFooter">
                
            </div>
        </div>
    )
}
