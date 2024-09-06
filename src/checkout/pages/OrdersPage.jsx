import { MainLayout } from "../layouts"
import { Route, Routes } from "react-router-dom";
import { ListOrdersView, OrderView } from "../views";

export const OrdersPage = () => {
    
    return (
        <MainLayout >
            <div className="orderPage">
                
                <Routes>
                    <Route path="/*" element={ <ListOrdersView /> } />
                    <Route path="/order" element={ <OrderView /> } />
                </Routes>

            </div>
        </MainLayout>
    )
}
