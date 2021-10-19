import FilmRelease from "./FilmRelease";

const FilmReleasesList = ({ films }) => {

    const filmList = films.map( (film) =>  {
        return (
            <FilmRelease key={film.id} film={film} />
        );
    })

    return (
        <>
            <ul>
                {filmList}
            </ul>
        </>
    );
}

export default FilmReleasesList;