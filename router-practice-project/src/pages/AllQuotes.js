import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mapee', text: 'Learning React is fun' },
    { id: 'q2', author: 'Heleb', text: 'Mastering fundermentals pays dividends.' },
]
const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;