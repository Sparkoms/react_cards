

function Movie({title, year, image}) {
    return (
        <section>
            <h1>{title}</h1>
            <img src={image} />
            <p>{year}</p>
        </section>
    );
}