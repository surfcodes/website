import styled from "@emotion/styled";

export default function Sidebar({ children }) {
  return (
    <List>
      {children.map((item) => (
        <ListItem className="font-roboto">
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

  margin-right: 7vw;

  @media (max-width: 380px) {
    box-shadow: 0 0 #0000, 0 0 #0000, 0 3px 4px -3px rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.05);

    padding: 2vh 2vw;

    border-radius: 10px;
  }
`;

const ListItem = styled.li`
  color: #686868;
  font-size: 1.2rem;
  font-weight: 300;
`;
