
const initialState = {
  loading: false,
  balance: 10000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'app/withdraw':
      return { ...state, balance: state.balance - action.payload };

    // ----------------------------------
    // Balance
    case 'app/balance/INIT':
      return { ...state, loading: true };
    case 'app/balance/SUCCESS':
      return {
        ...state,
        loading: false,
        balance: action.payload.balance
      };
    case 'app/balance/ERROR':
      return { ...state, loading: false };

    // ----------------------------------
    // Deposit
    case 'app/deposit/INIT':
      return { ...state, loading: true };
    case 'app/deposit/SUCCESS':
      return {
        ...state,
        loading: false,
        balance: action.payload.balance
      };
    case 'app/deposit/ERROR':
      return { ...state, loading: false };

    // ----------------------------------
    // Withdraw
    case 'app/withdraw/INIT':
      return { ...state, loading: true };
    case 'app/withdraw/SUCCESS':
      return {
        ...state,
        loading: false,
        balance: action.payload.balance
      };
    case 'app/withdraw/ERROR':
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
