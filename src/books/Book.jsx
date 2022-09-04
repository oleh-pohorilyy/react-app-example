import styled from 'styled-components'

export const Book = ({ name, disabled, author, onSelect }) => {
  return (
    <Book.Container onClick={!disabled && onSelect} disabled={disabled}>
      <Book.Information>
        <div>{name}</div>
        <Book.Author>{author}</Book.Author>
      </Book.Information>
    </Book.Container>
  )
}

Book.Container = styled.div`
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #720b98, #0048ba);

  display: flex;
  align-items: flex-end;

  cursor: pointer;
  transition: 0.3s;

  ${({ disabled }) =>
    disabled
      ? 'filter: grayscale(1); cursor: not-allowed;'
      : `:hover {
    scale: 1.1;
  }
  `}
`

Book.Information = styled.div`
  flex-grow: 1;
  background-color: #232323;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  text-align: center;

  > * {
    padding: 4px 8px;
  }
`

Book.Author = styled.div`
  font-size: 12px;
  color: #c0c0c0;
`
