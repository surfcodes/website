import styled from "@emotion/styled";

export default function Sidebar({ children }) {
  return (
    <List>
      {children.map((item) => (
        <ListItem>
          <a href={item.meta.slug} rel="prefetch">
            {item.meta.title}
          </a>
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  color: #686868;
  font-size: 1.2rem;
  font-weight: 300;
`;
