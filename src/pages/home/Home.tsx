
import BackgroundLines from './BackgroundLines';
import Bio from './Bio';
import ContactMe from './ContactMe';
import RecentWork from './RecentWork';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-gray-200">
      <BackgroundLines />
      <Bio />
      <RecentWork />
      <ContactMe />
    </div>
  );
};
