import React from 'react'
import ReactDOM from 'react-dom/client'
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang'
import {BrowserRouter, Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
// import HeaderHome from './components/HeaderHome'
import HomeTemplate from './templates/HomeTemplate'
import UserTemplate from './templates/UserTemplate'
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import HistoryOrder from './pages/HistoryOrder'
import Page404 from './pages/Page404'
import ForgotPassword from './pages/ForgotPassword'
import FormComponent from './pages/FormComponent/FormComponent'
import FormikDemo from './pages/FormComponent/FormikDemo'
//setup redux
import { store } from './redux/store'
import {Provider} from 'react-redux'

import NumberState from './pages/DemoRedux/NumberState'
import ChatApp from './pages/DemoRedux/ChatApp'
import CartPage from './pages/Carts/CartPage'
import ProductList from './pages/Products/ProductList'
import TableListSinhVien from './pages/QuanLySinhVien/TableListSinhVien'
import FormSinhVien from './pages/QuanLySinhVien/FormSinhVien'
import DemoMountingComponent from './pages/DemoUseEffect/DemoMountingComponent'
import DemoUpdatingComponent from './pages/DemoUseEffect/DemoUpdatingComponent'
import DemoUnmountComponent from './pages/DemoUseEffect/DemoUnmountComponent'
import DemoUseCallback from './pages/Demo_UseCallback_UseMemo/DemoUseCallback'
import DemoUseMemo from './pages/Demo_UseCallback_UseMemo/DemoUseMemo'
import Detail_UseParam from './pages/Detail_UseParam'
import BaiTapBookingTicket from './BaiTapBookingTicket/BaiTapBookingTicket'
import DemoUseHistory from './pages/Hook_Router/DemoUseHistory'
import DemoUseSearchParam from './pages/Hook_Router/DemoUseSearchParam'
import DemoUseRef from './pages/Demo_UseCallback_UseMemo/DemoUseRef'

//Cấu hình biến để chuyển hướng trang
import {createBrowserHistory} from 'history'
import DemoAntd from './components/DemoAntd'
import AdminTemplate from './templates/AdminTemplate'
import UserList from './pages/AdminUsers/UserList'
import DetailUser from './pages/AdminUsers/DetailUser'
import CreateUser from './pages/AdminUsers/CreateUser'
import ReactQueryUsers from './pages/AdminUsers/ReactQueryUsers';
import ReactQueryCreateUser from './pages/AdminUsers/ReactQueryCreateUser';
import ReactQueryUserPaging from './pages/AdminUsers/ReactQueryUserPaging';
import Loading from './components/Loading';
import useRedux from './CustomHook/useRedux';
import MessageNotify from './components/MessageNotify';

//Cài đặt react query
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
//Cài đặt react query devtool
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import ReactQueryUsersMockApi from './pages/AdminUsers/ReactQueryUsersMockApi'
import DemoHOC from './HOC/DemoHOC'
import ModalRedux from './HOC/ModalRedux'
import HomePageDesktop from './pages/HomePage/HomePageDesktop'
import ResponsiveItem from './HOC/ResponsiveItem'
import HomePageMobile from './pages/HomePage/HomePageMobile'

const queryClient = new QueryClient()
// history tương tự navigate dùng để chuyển hướng trang ở một trang không phải component
export const historyRouter = createBrowserHistory();
// const {state} = useRedux();
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    {/* <div>
      <BaiTapGioHang />
    </div> */}
    <HistoryRouter history={historyRouter}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<ResponsiveItem component={<HomePageDesktop />} mobileComponent={<HomePageMobile />} />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="form" element={<FormComponent />} />
            <Route path="formik" element={<FormikDemo />} />
            <Route path="number-state" element={<NumberState />} />
            <Route path="chat-app" element={<ChatApp />} />
            <Route path="cart-page" element={<CartPage />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="table-list-sinh-vien" element={<TableListSinhVien />} />
            <Route path="form-sinh-vien" element={<FormSinhVien />} />
            <Route path="useEffect-mounting" element={<DemoMountingComponent />} />
            <Route path="useEffect-updating" element={<DemoUpdatingComponent />} />
            <Route path="useEffect-unmount" element={<DemoUnmountComponent />} />
            <Route path="useCallBack" element={<DemoUseCallback />} />
            <Route path="demo-hoc" element={<DemoHOC />} />
            <Route path="useMemo" element={<DemoUseMemo />} />
            <Route path="bookingTicket" element={<BaiTapBookingTicket />} />

            {/* use Param */}
            <Route path='detail'>
              <Route path=':idProduct' element={<Detail_UseParam />}></Route>
            </Route>
            <Route path='use-history' element={<DemoUseHistory />}></Route>            
            <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
            <Route path='use-ref' element={<DemoUseRef />}></Route>
            <Route path='demo-antd' element={<DemoAntd />}></Route>

          </Route>
          {/* Phần user */}
          <Route path="user" element={<UserTemplate />}>
            <Route path="profile" element={<Profile />} />
            <Route path="history" element={<HistoryOrder />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="*" element={<Navigate to="/user/profile" />} />
          </Route>
          <Route path="*" element={<Page404 />} />

          {/* Phần admin */}
          <Route path='admin' element={<AdminTemplate />}>
              <Route path='users' element={<UserList />}></Route>
              <Route path='user-detail'>
                  <Route path=':id' element={<DetailUser />}></Route>
              </Route>
              <Route path='user-create' element={<CreateUser />}></Route>
              <Route path='react-query-users' element={<ReactQueryUsers />}></Route>
            <Route path='react-query-user-paging' element={<ReactQueryUserPaging />}></Route>
            <Route path='react-query-create-user' element={<ReactQueryCreateUser />}></Route>
            <Route path='react-query-users-mockapi' element={<ReactQueryUsersMockApi />}></Route>
          </Route>

          {/* {state.loadingReducer.isLoading && <Loading /> } 
      <MessageNotify /> */}
        </Routes>
        <ModalRedux />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        </QueryClientProvider>
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
