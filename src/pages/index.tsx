import { NextPageWithLayout } from './_app';
import Dashoboard from '~/components/Dashboard/Dashboard';

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="Dashboard">
      <Dashoboard />
      <style jsx global>{`
        .Dashboard {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
