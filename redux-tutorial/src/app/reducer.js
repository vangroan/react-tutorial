
const initialState = {
  balance: 10000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'app/withdraw':
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default reducer;
