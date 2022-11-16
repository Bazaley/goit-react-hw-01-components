import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';

export const App = () => {
  return (
    <>
      <Profile user={user}>
        <Stats stats={user.stats} />
      </Profile>
    </>
  );
};
