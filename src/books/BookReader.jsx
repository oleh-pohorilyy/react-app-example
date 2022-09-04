import { useMemo, useState } from 'react'
import styled from 'styled-components'

const SENTENCES_PER_PAGE = 20

export const BookReader = ({ text, onClose }) => {
  const [page, setPage] = useState(1)
  const pages = useMemo(() => {
    const sentences = text
      .replace('\n', '')
      .split('.')
      .map((e) => e.trim())

    const output = []

    for (let i = 0; i < Math.ceil(sentences.length / SENTENCES_PER_PAGE); i++) {
      const page = sentences.slice(SENTENCES_PER_PAGE * i, SENTENCES_PER_PAGE * (i + 1))
      output.push(page)
    }
    return output
  }, [text])
  const lines = pages[page - 1]

  return (
    <div>
      <div>
        <button onClick={onClose}>◄ Back</button>
        <button onClick={() => setPage(Math.max(page - 1, 1))}>◄ Previous</button>
        <span
          style={{
            margin: '0 8px',
            backgroundColor: '#eee',
            display: 'inline-block',
            padding: '0 8px',
          }}
        >
          {page}
        </span>
        <button onClick={() => setPage(Math.min(page + 1, pages.length))}>Next ►</button>
      </div>

      <BookReader.Text>
        <div>
          {lines.map((line, idx) => (
            <BookReader.Line key={idx}>{line}</BookReader.Line>
          ))}
        </div>
      </BookReader.Text>
    </div>
  )
}

BookReader.Text = styled.div`
  padding: 16px;
  background-color: #f8e8ce;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    max-width: 700px;
  }
`

BookReader.Line = styled.div`
  margin: 16px 0;
`
