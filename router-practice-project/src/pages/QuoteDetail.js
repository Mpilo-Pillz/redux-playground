import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Mapee', text: 'Learning React is fun' },
//     { id: 'q2', author: 'Heleb', text: 'Mastering fundermentals pays dividends.' },
// ]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    const { quoteId } = params
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    console.log("match-->", match);
    console.log("params-->", params);

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found</p>
    }
    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            {/* <Route path={`/quotes/${params.quoteId}`} exact></Route> */}
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                    {/* <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link> */}
                </div>
            </Route>
            {/* <Route path={`/quotes/${params.quoteId}/comments`}></Route> */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;