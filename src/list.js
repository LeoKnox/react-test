function NewList({iList}) {
    return (
        <>
        <p>external list</p>
        <table>
            {iList.map ((task) => (
                <tr>
                    <td>{task}</td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </table>
        </>
    )
}

export default NewList;