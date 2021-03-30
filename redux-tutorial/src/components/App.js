import { useState } from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

const formatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

function App() {
  // -------
  //  State
  // -------
  const initial = 10000;
  const [balance, setBalance] = useState(initial);

  // --------
  //  Action
  // --------
  const deposit = () => setBalance(balance + 100);
  const withdraw = () => setBalance(balance - 100);

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
            <Button content="Deposit" primary icon="plus circle" onClick={deposit} />
            <Button content="Withdraw" secondary icon="minus circle" onClick={withdraw} />
          </Segment>
        </Segment.Group>
      </Container>
    </div>
  );
}

export default App;
