import React, {useState} from "react";

const Table = () => {
    const initialValues = {
        fname: "",
        lname: "",
        age: "",
    };
    const [dataIndex, setIndex] = useState(null);
    const [editData, setEdit] = useState(false);
    const [selected, setSelected] = useState(initialValues);
    const [user, setUser] = useState(initialValues);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const editHandleChange = (e) => {
        const {name, value} = e.target;
        setSelected({
            ...selected,
            [name]: value,
        });
    };
    const deleteData = (index) => {
        const array = [...data];
        array.splice(index, 1);
        setData(array);
    };

    const addData = () => {
        const array = [...data];
        array.push(user);
        setData(array);
        setUser(initialValues);
    };

    const edit = (index) => {
        setEdit(true)
        setIndex(index);
        const array = [...data]
        setSelected(array[index]);
    };
    const save = (e) => {
        const array = [...data]
        array[dataIndex]=selected;
        setData(array);
        setEdit(false)
    }
    return (
        <div>
            <input
                type="text"
                name="fname"
                placeholder="fname"
                value={user.fname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lname"
                placeholder="lname"
                value={user.lname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                placeholder="Age"
                value={user.age}
                onChange={handleChange}
            />
            <button onClick={addData}>Add Data</button>
            {data.map((data, i) => (
                <div key={i}>
                    {editData && i===dataIndex ?
                        <>
                            <input value={selected.fname}  name="fname" onChange={editHandleChange}/>
                            <input value={selected.lname}  name="lname" onChange={editHandleChange}/>
                            <input value={selected.age}  name="age" onChange={editHandleChange}/>
                            <button onClick={save}>Save</button>
                            <button onClick={() => setEdit(false)}>Cancel</button>
                        </>
                        :
                        <>
                            <div>{data.fname}</div>
                            <div>{data.lname}</div>
                            <div>{data.age}</div>
                            <button onClick={() => deleteData(i)}>Delete</button>
                            <button onClick={() => edit(i)}>Edit</button>
                        </>
                    }

                </div>
            ))}
        </div>
    );
};

export default Table;
