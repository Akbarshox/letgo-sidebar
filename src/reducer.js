export default function reducer(state, action) {
   switch (action.type) {
      case 'IMAGE':
         return {...state, images: [...state.images, action.payload]}
      case 'DELETE':
         return {...state, images: state.images.filter(item => item !== action.payload)};
   }
}