
export function getBalance() {
  return function (dispatch) {
    console.log("get Balance");
    dispatch({ type: 'app/balance/INIT' });

    return fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => dispatch({ type: 'app/balance/SUCCESS', payload: data }))
      .catch(err => dispatch({ type: 'app/balance/ERROR', payload: err }));
  }
}

export function postDeposit(amount) {
  return function (dispatch) {
    dispatch({ type: 'app/deposit/INIT' });

    return fetch('http://localhost:8000/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'app/deposit/SUCCESS', payload: data }))
      .catch(err => dispatch({ type: 'app/deposit/ERROR', payload: err }));
  }
}

export function postWithdraw(amount) {
  return function (dispatch) {
    dispatch({ type: 'app/withdraw/INIT' });

    return fetch('http://localhost:8000/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'app/withdraw/SUCCESS', payload: data }))
      .catch(err => dispatch({ type: 'app/withdraw/ERROR', payload: err }));
  }
}
