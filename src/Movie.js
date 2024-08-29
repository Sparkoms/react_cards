

function Movie({title, description, image}) {
    return (
        <section>
            <h1>{title}</h1>
            <img src={image} />
            <p>{description}</p>
        </section>
    );
}