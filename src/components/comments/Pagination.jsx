import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages + 1}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

// mainColor
const Button = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  color: #ffffff;
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 4px 0px #b6b7b9;
    color: ${(props) => props.theme.mainColor};
  }

  &[disabled] {
    background: white;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #6b6868;
    font-weight: bold;
    color: white;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
