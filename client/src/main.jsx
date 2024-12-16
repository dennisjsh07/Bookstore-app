import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import 'sweetalert2/dist/sweetalert2.js'
import { Provider } from 'react-redux'
import CartStore from './utils/CartStore.js'


createRoot(document.getElementById('root')).render(
  <Provider store={CartStore}>
    <RouterProvider router={router} />
  </Provider>,
)
