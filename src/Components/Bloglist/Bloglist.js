import React from 'react'
import Blogitem from '../Blogitem/Blogitem'
const list = [
    {
        "id": 1,
        "title": "The Great Gatsby",
        "description": "A novel written by American author F. Scott Fitzgerald.",
        "publishedDate": "1925-04-10"
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird",
        "description": "A novel by Harper Lee published in 1960.",
        "publishedDate": "1960-07-11"
    },
    {
        "id": 3,
        "title": "1984",
        "description": "A dystopian social science fiction novel and cautionary tale by the English writer George Orwell.",
        "publishedDate": "1949-06-08"
    },
    {
        "id": 4,
        "title": "Pride and Prejudice",
        "description": "A romantic novel of manners written by Jane Austen in 1813.",
        "publishedDate": "1813-01-28"
    },
    {
        "id": 5,
        "title": "The Catcher in the Rye",
        "description": "A novel by J. D. Salinger, partially published in serial form in 1945–1946.",
        "publishedDate": "1951-07-16"
    },
    {
        "id": 6,
        "title": "The Hobbit",
        "description": "A children's fantasy novel by English author J. R. R. Tolkien.",
        "publishedDate": "1937-09-21"
    },
    {
        "id": 7,
        "title": "Moby-Dick",
        "description": "A novel by Herman Melville, published in 1851.",
        "publishedDate": "1851-10-18"
    },
    {
        "id": 8,
        "title": "War and Peace",
        "description": "A novel by Leo Tolstoy, first published from 1865 to 1869.",
        "publishedDate": "1869-01-01"
    },
    {
        "id": 9,
        "title": "Crime and Punishment",
        "description": "A novel by the Russian author Fyodor Dostoevsky.",
        "publishedDate": "1866-01-01"
    },
    {
        "id": 10,
        "title": "The Brothers Karamazov",
        "description": "A novel by the Russian author Fyodor Dostoevsky.",
        "publishedDate": "1880-11-01"
    }
]

function Bloglist() {
    return (
        <div><Blogitem list={list} /></div>
    )
}

export default Bloglist