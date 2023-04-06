import Order from "../Order/Order"

function SortOrderDay({ data })
{
    return (
        <>
            <h3>День: {data.day}</h3>
            {
                data.data.map((o, i) => <Order key={i} order={o} />)
            }
            <div className="line"></div>
        </>
    )
}

export default SortOrderDay