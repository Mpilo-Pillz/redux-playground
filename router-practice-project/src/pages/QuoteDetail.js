import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mapee', text: 'Learning React is fun' },
    { id: 'q2', author: 'Heleb', text: 'Mastering fundermentals pays dividends.' },
]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    console.log("match-->", match);
    console.log("params-->", params);

    if (!quote) {
        return <p>No quote found</p>
    }
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
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