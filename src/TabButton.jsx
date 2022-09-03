export const TabButton = (props) => {
  return (
    <span
      onClick={() => props.setTab(props.tabId)}
      className={props.tab === props.tabId ? 'active' : ''}
    >
      {props.label}
    </span>
  )
}
