function Movies({ data }) {
    return (
        <article>
            <header>
                <h1>Список фильмов</h1>
            </header>
            <div className="movies">
                {data.map(item => (
                    <Movie key={item.imdbID} title={item.Title} image={item.Poster} year={item.Year} />
                ))}
            </div>
        </article>
    );
}