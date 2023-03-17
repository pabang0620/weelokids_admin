import LayoutNavbar from './LayoutNavbar';
import Sidebar from './Sidebar';
export default function LayoutNav(props: any) {
  return (
    <>
      <div className="LayoutNavbarHeight"></div>
      <Sidebar />
      <LayoutNavbar></LayoutNavbar>
      <style jsx>{`
        .LayoutNavbarHeight {
          margin-top: 108px;
        }
      `}</style>
    </>
  );
}
