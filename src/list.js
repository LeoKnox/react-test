function NewList({iList}) {
    return (
        <>
        <p>external list</p>
        <table>
            {iList.map ((task) => (
                <tr>
                    <td>{task}</td>
                </tr>
            ))}
        </table>
        </>
    )
}

export default NewList;