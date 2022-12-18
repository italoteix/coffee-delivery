import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Default } from './layouts/Default'

import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Default />}>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />,
    </Route>,
  ),
)

export function Router() {
  return <RouterProvider router={router} />
}
