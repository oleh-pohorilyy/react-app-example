import { useState } from 'react'
import styled from 'styled-components'
import { Book } from './Book'
import { BookReader } from './BookReader'
import { pages } from './pages'

const books = [
  { id: 1, name: 'Властелин колец', author: 'Джон Р. Р. Толкин' },
  { id: 2, name: 'Гордость и предубеждение', author: 'Джейн Остин' },
  { id: 3, name: 'Тёмные начала', author: 'Филип Пулман' },
  { id: 4, name: 'Автостопом по галактике', author: 'Дуглас Адамс' },
  { id: 5, name: 'Гарри Поттер и Кубок огня', author: 'Джоан Роулинг' },
  { id: 6, name: 'Убить пересмешника', author: 'Харпер Ли' },
  { id: 7, name: 'Винни Пух', author: 'Алан Александр Милн' },
  { id: 8, name: '1984', author: 'Джордж Оруэлл' },
  {
    id: 9,
    name: 'Лев, колдунья и платяной шкаф',
    author: 'Клайв Стэйплз Льюис',
  },
  { id: 10, name: 'Джейн Эйр', author: 'Шарлотта Бронте' },
  { id: 11, name: 'Уловка-22', author: 'Джозеф Хеллер' },
  { id: 12, name: 'Грозовой перевал', author: 'Эмили Бронте' },
  { id: 13, name: 'Пение птиц', author: 'Себастьян Фолкс' },
  { id: 14, name: 'Ребекка', author: 'Дафна Дюморье' },
]

export const Books = () => {
  const [book, setBook] = useState(null)

  return book ? (
    <BookReader text={pages[book]} onClose={() => setBook(null)} />
  ) : (
    <Books.Container>
      {books.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          author={book.author}
          onSelect={() => setBook(book.id)}
          disabled={!pages[book.id]}
        />
      ))}
    </Books.Container>
  )
}

Books.Container = styled.div`
  background-color: yellow;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 16px;
`
