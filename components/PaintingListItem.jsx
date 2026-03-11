function PaintingListItem(props) {

    const {painting, change} = props;

    function handleChoose(c) {
        change(painting);
    }

    return (
        <div class="row">
            <li><img src={"paintings/" + painting.id + "-sq.jpg"} alt={painting.title} /></li>
            <li><h3>{painting.title}</h3></li>
            <li>{painting.artist}</li>
            <li>{painting.year}</li>
            <li><button class="edit" onClick={handleChoose}>Edit</button></li>
        </div>
    );
}

export default PaintingListItem;