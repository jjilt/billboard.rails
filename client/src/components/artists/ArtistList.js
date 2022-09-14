import ArtistShow from './ArtistShow';

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
  <>
    {/* [
      {id: 1, body: "Kong City", title: 'food'}, 
      {id: 2, body: "Mario City", title: 'mushrooms'}, 
      {id: 3,body: "Peach City", title: 'coins'}, 
    ] */}
    {
      artists.map( t => 
        <ArtistShow
          key={t.id}
          {...t}
          updateArtist={updateArtist}
          deleteArtist={deleteArtist}
        />
      )
    }
  </>
)

export default ArtistList;