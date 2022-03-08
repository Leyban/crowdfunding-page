export const Counter: React.FC = () => {

    return (
        <div className="counter" id="Discover">
            <div className="container">
                <div className="numbers-container">
                    <div className="money-counter">
                        <h2>$89,914</h2>
                        <p>of $100,000 backed</p>    
                    </div>
                    <div className="backer-counter">
                        <h2>5,007</h2>
                        <p>total backers</p>
                    </div>
                    <div className="days-counter">
                        <h2>56</h2>
                        <p>days left</p>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="total"></div>
                </div>
            </div>
            
        </div>
    )
}