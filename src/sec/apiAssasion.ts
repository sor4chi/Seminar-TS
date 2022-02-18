import { BookSummary } from "./type";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const BookService = {
  get: {
      bookSummary: async (): Promise<BookSummary> => {
      const json = await ("/book_summary").then(res => res.json());
      const summary: BookSummary = json;
      return summary;
    }
  },
};

const main = async () => {
  const book = await BookService.get.bookSummary();
  console.log(book);
};

main();
