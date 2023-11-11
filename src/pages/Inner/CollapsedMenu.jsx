import Panel from "../../components/Panel/Panel";
import PropTypes from "prop-types";

export default function CollapsedMenu({ collapsed, setCollapsed }) {
  return (
    <aside className="main--sidebar">
      <Panel
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      />
    </aside>
  );
}

CollapsedMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
