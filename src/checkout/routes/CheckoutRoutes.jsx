import { Route, Routes } from "react-router-dom"
import { CustomersPage, DebtsPage, EmployeesPage, OrdersPage } from "../pages"

export const CheckoutRoutes = () => {
    return (
        <Routes>
            <Route path="/orders/*" element={ <OrdersPage /> } />
            <Route path="/employees" element={ <EmployeesPage /> } />
            <Route path="/customers" element={ <CustomersPage /> } />
            <Route path="/debts" element={ <DebtsPage /> } />
        </Routes>
    )
}
