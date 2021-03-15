import Publication from './Publication'

const Publications = ({publications}) => {
    return (
        <div className="container bg-light p-2">
            {publications.map((publication, index) => (
            <Publication 
            key={index}
            publication={publication}
           />
            ))}
        </div>
    )
}

export default Publications