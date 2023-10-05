

export function ItemList({numList}) {
    const sum = Object.values(numList).reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="listContainer">
            {Object.entries(numList).map((number) => {
                return (
                    <div key={number[0]} className="listItem">
                        <p>{number[1]}</p>
                        <button type="button">X</button>
                    </div>
                )
            })}
            <div className="listItem sumItem">
                <p>Sum: {sum}</p>
            </div>
            
        </div>
    )
}