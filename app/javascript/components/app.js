import React, { useState, useEffect } from 'react';
import axios from 'axios';

const app = () => {
    const [memberState, setMemberState] = useState([]);
    const [memberInfo, setMemberInfo] = useState({ name: '', age: 0 });

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/members'
        })
            .then(({ data }) => {
                setMemberState(data);
            })
    }, []);

    const changeHandler = ({ target }) => {
        setMemberInfo((prev) => ({ ...prev, [target.id]: target.value }));
    }

    const addDog = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: '/members',
            data: memberInfo
        })
            .then(({ data }) => {
                setMemberState((prev) => {
                    const newList = [...prev];
                    newList.push(data);
                    return newList;
                });
            })
    };

    const removeMember = (id, i) => {
        axios({
            method: 'DELETE',
            url: `/members/${id}`
        })
            .then(() => {
                setMemberState((prev) => {
                    const newList = [...prev]
                    newList.splice(i, 1);
                    return newList;
                });
            })
    }

    const updateMember = (id, i) => {
        axios({
            method: 'PUT',
            url: `/members/${id}`,
            data: memberInfo
        })
            .then(({ data }) => {
                setMemberState((prev) => {
                    const newList = [...prev];
                    newList[i] = data;
                    return newList;
                })
            })
    }

    return (
        <div>
            <h1>The funny members of PlexDog</h1>
            {memberState.map((member, i) => (
                <div key={member.id}>
                    <p>{member.name} age: {member.age}</p>
                </div>
            ))}
            <br />
            <form>
                <label>Name:
                    <input onChange={changeHandler} type="text" id="name" value={dogInfo.name} />
                </label>
                <label>Age:
                    <input onChange={changeHandler} type="number" id="age" value={dogInfo.age} />
                </label>
                <button onClick={addDog}>Add Dog</button>
                {memberState.map((member, i) => (
                    <div key={member.id}>
                        <p>{member.name} age: {member.age}</p>
                        <button onClick={() => removeMember(member.id, i)}>Remove</button>
                        <button onClick={() => updateMember(member.id, i)}>Update</button>
                    </div>
                ))}
            </form>
        </div>
    )
}
export default app;