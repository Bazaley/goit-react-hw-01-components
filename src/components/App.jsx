import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile user={user}>
        <Stats stats={user.stats} />
      </Profile>
      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>
      <FriendsList>
        <FriendListItem friends={friends} />
      </FriendsList>
      <TransactionHistory>
        <Transactions items={transactions} />
      </TransactionHistory>
    </>
  );
};
