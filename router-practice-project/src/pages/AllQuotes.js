import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mapee', text: 'Learning React is fun' },
    { id: 'q2', author: 'Heleb', text: 'Mastering fundermentals pays dividends.' },
]
const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }
    return <QuoteList quotes={loadedQuotes} />
    // return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;