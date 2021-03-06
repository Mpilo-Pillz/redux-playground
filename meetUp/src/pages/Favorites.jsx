import { useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetUpList';

function Favorites() {
   const favoritesCtx = useContext(FavoritesContext);

   let content;

   if (favoritesCtx.totalFavorites === 0) {
      content = <p>No favorites added</p>
   } else {
      <MeetupList meetups={favoritesCtx.favorites} />
   }
   return ( 
   <section>
      <h1>My Favorites</h1>
      {content}
   </section>
   )

}

export default Favorites