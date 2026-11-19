// Your reading list, rendered as spines on the shelf in the reading-list cell.
// Order here is order on the shelf, left to right. The shelf scrolls sideways.
//
// Each entry: { title, author, year?, pages?, url?, spine? }
// - spine: a photo of the spine on a transparent background (public/front/books/),
//   with its pixel size so the shelf never shifts while it loads.
// - Without a spine photo the book is set in type: width from pages (or a
//   hash of the title), height from a hash of the title, stable between builds.
// - url makes the spine a link that opens in a new tab.

import type { Book } from './types';

export const readingList: Book[] = [
  { title: 'The Fountainhead', author: 'Ayn Rand', spine: { src: '/front/books/01-the-fountainhead.webp', width: 84, height: 560 } },
  { title: '84, Charing Cross Road', author: 'Helene Hanff', spine: { src: '/front/books/02-84-charing-cross-road.webp', width: 52, height: 560 } },
  { title: 'The Forty Rules of Love', author: 'Elif Shafak', spine: { src: '/front/books/03-the-forty-rules-of-love.webp', width: 55, height: 560 } },
  { title: 'Steve Jobs', author: 'Walter Isaacson', spine: { src: '/front/books/04-steve-jobs.webp', width: 89, height: 560 } },
  { title: 'Bottle of Lies', author: 'Katherine Eban', spine: { src: '/front/books/05-bottle-of-lies.webp', width: 87, height: 560 } },
  { title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', spine: { src: '/front/books/06-21-lessons-for-the-21st-century.webp', width: 90, height: 560 } },
  { title: 'Blue Ocean Strategy', author: 'W. Chan Kim and Renée Mauborgne', spine: { src: '/front/books/07-blue-ocean-strategy.webp', width: 67, height: 560 } },
  { title: 'Kafka on the Shore', author: 'Haruki Murakami', spine: { src: '/front/books/08-kafka-on-the-shore.webp', width: 79, height: 560 } },
  { title: 'The Diary of a Young Girl', author: 'Anne Frank', spine: { src: '/front/books/09-the-diary-of-a-young-girl.webp', width: 82, height: 560 } },
  { title: 'My Life in Full', author: 'Indra Nooyi', spine: { src: '/front/books/10-my-life-in-full.webp', width: 60, height: 560 } },
  { title: 'Becoming', author: 'Michelle Obama', spine: { src: '/front/books/11-becoming.webp', width: 63, height: 560 } },
  { title: 'Bad Blood', author: 'John Carreyrou', spine: { src: '/front/books/12-bad-blood.webp', width: 59, height: 560 } },
  { title: 'The Romantic Manifesto', author: 'Ayn Rand', spine: { src: '/front/books/13-the-romantic-manifesto.webp', width: 49, height: 560 } },
  { title: '1984', author: 'George Orwell', spine: { src: '/front/books/14-1984.webp', width: 47, height: 560 } },
  { title: 'The Myth of Sisyphus', author: 'Albert Camus', spine: { src: '/front/books/15-the-myth-of-sisyphus.webp', width: 34, height: 560 } },
  { title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', spine: { src: '/front/books/16-thus-spoke-zarathustra.webp', width: 50, height: 560 } },
  { title: 'Norwegian Wood', author: 'Haruki Murakami', spine: { src: '/front/books/17-norwegian-wood.webp', width: 58, height: 560 } },
  { title: 'The Visual Display of Quantitative Information', author: 'Edward Tufte', spine: { src: '/front/books/18-the-visual-display-of-quantitative-information.webp', width: 41, height: 560 } },
  { title: 'Competitive Programming 3', author: 'Steven Halim and Felix Halim', spine: { src: '/front/books/19-competitive-programming-3.webp', width: 65, height: 560 } },
  { title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest and Stein', spine: { src: '/front/books/20-introduction-to-algorithms.webp', width: 124, height: 560 } },
  { title: 'The Non-Designer’s Design Book', author: 'Robin Williams', spine: { src: '/front/books/22-the-non-designers-design-book.webp', width: 24, height: 560 } },
  { title: 'Thinking with Type', author: 'Ellen Lupton', spine: { src: '/front/books/23-thinking-with-type.webp', width: 43, height: 560 } },
  { title: 'Arts of Living on a Damaged Planet', author: 'Anna Tsing, Heather Swanson, Elaine Gan and Nils Bubandt', spine: { src: '/front/books/24-arts-of-living-on-a-damaged-planet.webp', width: 47, height: 560 } },
  { title: 'The Unsettling of America', author: 'Wendell Berry', spine: { src: '/front/books/25-the-unsettling-of-america.webp', width: 62, height: 560 } },
];
