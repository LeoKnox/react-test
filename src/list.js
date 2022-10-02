function NewList({iList}) {
    console.log({iList}+"****");
    return (
        <>
        <p>external list</p>
        {iList.map ((task) => (
            <p>:{task}</p>
        ))}
        </>
    )
}

export default NewList;