import RegionList from "./RegionList";
import SortBy from "./SortBy";
import Status from "./Status";

function SideContent() {
  return (
    <aside>
      <SortBy />
      <RegionList />
      <Status />
    </aside>
  );
}

export default SideContent;
