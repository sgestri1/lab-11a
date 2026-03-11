import PaintingListItem from '/components/PaintingListItem.jsx';

function PaintingList(props) {
    return (
        <section class="paintingList">
            <ul>
                { props.paintings.map( p => <PaintingListItem painting={p} key={p.id} current={props.current} change={props.change}/>)}
            </ul>
        </section>
    );
}

export default PaintingList;