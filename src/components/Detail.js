const Detail = ({publication}) => {
    return (
        <div className='card mt-3'>
            <div className='card-body'>
                <div className='row'>
                    <div class="col-sm-6">
                        <p><strong>Publisher: </strong><a href='https://www.ccdc.cam.ac.uk/'>{publication.attributes.publisher}</a></p>
                        <p><strong>Publication Year: </strong>{publication.attributes.publicationYear}</p>
                    </div>
                    <div class="col-sm-6">
                        <strong>Subjects</strong>
                        {publication.attributes.subjects.map((subject, index) => (
                        <li key={index}>
                            {subject.subject}
                        </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
