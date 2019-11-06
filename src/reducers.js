const initialState={
  count:1
}
const reducers = (state = initialState, action) => {
console.log("reducer");
  switch (action.type) {
   case 'INCREMENT':
     return {
      ...state,count:state.count+1,
     };
     default:
     return state;
   }
  return state;
};
export default reducers;
