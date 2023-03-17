import DashboardHeader from './DashboardHeader';
import DashoboardBody from './DashboardBody';
import DashboardFooter from './DashboardFooter';

export default function Dashboard() {
  return (
    <div className="DashboardBody">
      <DashboardHeader />
      <DashoboardBody />
      <DashboardFooter />
      <style jsx>{`
        .DashboardBody {
          margin: 18px 2.44%;
          position: absolute;
          left: 11.3%;
        }
      `}</style>
    </div>
  );
}
