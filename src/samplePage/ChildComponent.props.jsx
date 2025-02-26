export const ChildComponent = ({title, content}) => {

    return(
        <div className="card">
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}