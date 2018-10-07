import Book from "../book";
import Fair from '../fair';
const RootQuery = `
  type RootQuery {
    getBooks: [Book]
    getFairs: [Fair]
  }
`

export default () => [RootQuery, Book, Fair]