function EditPaintingForm(props) {

    function handleEdit(c) {
        const modifiedPainting = {...props.current};

        const {name, value} = c.target;

        modifiedPainting[name] = value;

        props.update(modifiedPainting);
    }

    const {id, title,artist,year} = props.current;

    return (
        <section class="paintingForm">
            <img src={"paintings/" + id + ".jpg"} alt={title}/>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={ handleEdit }/>
            </div>
            <div>
                <label>Artist</label>
                <input type="text" name="artist" value={artist} onChange={ handleEdit }/>
            </div>
            <div>
                <label>Year</label>
                <input type="text" name="year" value={year} onChange={ handleEdit }/>
            </div>
        </section>
    );
}

export default EditPaintingForm;