const ListItem = (props) => {
  return (
    <ul>
      {props.items &&
        props.items.map((item) => (
          <li key={item.id}>
            <span
              style={{ textDecoration: item.completed ? "line-through" : "" }}
              onClick={() => props.toggleItem && props.toggleItem(item)}
            >
              {item.name}
            </span>
            <button onClick={() => props.removeItem(item)}>x</button>
          </li>
        ))}
    </ul>
  );
};

export default ListItem;
