import React, {memo} from 'react'

const ChildComponent = (props) => {
    console.log('child render')
  return (
    <div>
        <div className="bg-dark text-white p-2 mt-2">
            {props.renderLike()}
        </div>
    </div>
  )
}

export default memo(ChildComponent)
// hoc: higher order component
// function main (callback) {
//     return function () {
//         return {
//             callback
//         }
//     }
// }

// memo: giúp hạn chế việc render lại component do có sự so sánh về props trước và sau khi render (props bị thay đổi thì component mới render lại) => shallow compare