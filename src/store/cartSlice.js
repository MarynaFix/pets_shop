const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/add": {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + action.payload.count }
            : item,
        );
      }

      return [...state, action.payload];
    }

    default:
      return state;
  }
};
export const addToCart = (product) => ({
  type: "cart/add",
  payload: product,
});
