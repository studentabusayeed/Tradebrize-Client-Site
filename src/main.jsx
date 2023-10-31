import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#000000]'>
      <div className='max-w-sm mx-auto bg-[#000000]'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
