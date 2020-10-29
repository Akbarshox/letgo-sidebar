export default function reducer(state, action) {
   switch (action.type) {
      case 'IMAGE':
         return {...state, images: state.payload}
   }
}