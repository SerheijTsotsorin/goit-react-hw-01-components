import Profile from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friendslist/FriendsList';
import { TransactionHistory } from './components/transaction/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friendsData from './friends.json';
import transactions from './components/transaction/transactions.json';

export default function App() {
  return (
    <div className="profile">
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
