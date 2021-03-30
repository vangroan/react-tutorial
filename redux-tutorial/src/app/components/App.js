import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

import { postDeposit, postWithdraw, getBalance } from 'app/action';

const formatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

function App() {
  // -------
  //  State
  // -------
  // const initial = 10000;
  // const [balance, setBalance] = useState(initial);
  const balance = useSelector(state => state.balance, shallowEqual);
  const loading = useSelector(state => state.loading, shallowEqual);

  // --------
  //  Action
  // --------
  const dispatch = useDispatch();
  // const deposit = () => dispatch({ type: 'app/deposit', payload: 100 });
  // const withdraw = () => dispatch({ type: 'app/withdraw', payload: 100 });
  const deposit = () => dispatch(postDeposit(100));
  const withdraw = () => dispatch(postWithdraw(100));
  useEffect(() => dispatch(getBalance()), []);

  // ------
  //  View
  // ------
  return (
    <div>
      <Container text style={{ paddingTop: "2em" }}>
        <Segment.Group>
          <Segment padded="very" textAlign="center">
            <Header as="h2">
              {formatter.format(balance)}
              <Header.Subheader>Balance</Header.Subheader>
            </Header>
          </Segment>
          <Segment padded="very" textAlign="center">
            <Button content="Deposit" primary icon="plus circle" onClick={deposit} loading={loading} />
            <Button content="Withdraw" secondary icon="minus circle" onClick={withdraw} loading={loading} />
          </Segment>
        </Segment.Group>
      </Container>
    </div>
  );
}

export default App;
