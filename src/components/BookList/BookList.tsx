import React from "react";
import { Book } from "../types";
import { BookListItem } from "./BookListItem";

interface BookListProps {
  items: Book[];
}

export const BookList = ({ items }: BookListProps) => (
  <div className="books_list">
    {items.map((item) => (
      <div className="box" key={item.isbn}>
        <BookListItem inCart={false} item={item} />
      </div>
    ))}
  </div>
);
