import { Book, Tag } from "types/book";
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

const BookService = {
  get: {
    books: async (): Promise<Book[]> => {
      const res = await axios.get(`${baseUrl}/api/v1/books`);
      const books: Book[] = res.data;
      return books;
    },
    tags: async (): Promise<Tag[]> => {
      const res = await axios.get(`${baseUrl}/api/v1/tags`);
      const tags: Tag[] = res.data;
      return tags;
    },
  },
};

const fetchBook = async () => {
  const books = await BookService.get.books();
  console.log(books);
  console.log(books[0]);
  console.log(books[0].tags);
  console.log(books[0].tags[0]);
  console.log(books[0].tags[0].name);
};

const fetchTag = async () => {
  const tags = await BookService.get.tags();
  console.log(tags);
  console.log(tags[0]);
  console.log(tags[0].name);
};

fetchBook();
fetchTag();
