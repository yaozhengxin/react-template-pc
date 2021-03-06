// import React from 'react'
import Loadable from 'react-loadable'
// import { Spin } from 'antd';
import PageLoading from './../layouts/page-loading';

// 通用的过场组件
// const loadingComponent = () => {
//   return (
//     <div>
//       <Spin size="large" />
//     </div>
//   )
// }

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = PageLoading) => {
  return Loadable({
    loader,
    loading
  })
}
