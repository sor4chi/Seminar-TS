import { BookSummary } from "./type";
import axios from "axios";

const BookService = {
  get: {
      bookSummary: async (): Promise<BookSummary> => {
      const res = await axios.get("/book_summary");
      const summary: BookSummary = res.data;
      return summary;
    }
  },
};

const main = async () => {
  const book = await BookService.get.bookSummary();
  console.log(book);
};

main();
