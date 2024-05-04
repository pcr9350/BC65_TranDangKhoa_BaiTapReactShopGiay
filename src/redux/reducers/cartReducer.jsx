import _ from 'lodash'
const stateCartDefault = [
  { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000, quantity: 1 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000, quantity: 1 },
];

export const cartReducer = (state = stateCartDefault, action) => {
  switch(action.type){
    case 'ADD_ITEM': {
      const newProd = {...action.payload, quantity:1};
      // trước khi xử lý phải clone ra giá trị mới
      state = _.cloneDeep(state)
      //tiến hành xử lý thay đổi state
      const itemCart = state.find(item=>item.id===newProd.id);
      if (itemCart){
        itemCart.quantity += 1;
      }else{
        state.push(newProd)
      }
      
    };break;
    case 'DEL_ITEM': {
      // b1: lấy payload
      const id = action.payload
      // b2: clone state cũ ra
      state = _.cloneDeep(state);
      // b3: Xử lý thay đổi state
      let index = state.findIndex(prod=>prod.id===id);
      if(index != -1){
        state.splice(index,1);
      } 
    };break;
    case 'CHANGE_QUANTITY': {
      const {id, quantity} = action.payload;
      state = _.cloneDeep(state);
      const itemCart = state.find(prod => prod.id === id);
      if(itemCart){
        itemCart.quantity += quantity;
      }
    };break;
    case 'CHANGE_INPUT_QUANTITY': {
      const {id, quantity} = action.payload;
      state = _.cloneDeep(state);
      const itemCart = state.find(prod => prod.id === id);
      if(itemCart){
        itemCart.quantity = quantity;
      }
    };break;
  }
  return state;
}