export const GifItem = ({ id, url, title }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
        </div>
    );
};
