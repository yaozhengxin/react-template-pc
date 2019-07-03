import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading () {
    return <div></div>
  }
})

// const Loading = (props) => {
//   if (props.error) {
//     return <p>Error!</p>;
//   } else if (props.pastDelay) {
//     return <p>Loading...</p>;
//   } else {
//     return null;
//   }
// }

export default LoadableComponent
