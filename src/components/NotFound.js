



const NotFound = ({onNotFound}) => {
    return (
        <div>
            <h1>No results</h1>
            <input type="btn" defaultValue='Вернуться на главную страницу' onClick={() => onNotFound()}/>
        </div>
    )
}

export default NotFound;