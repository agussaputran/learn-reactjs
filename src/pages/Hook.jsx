import React, { useState, useEffect } from "react";

const Hook = () => {
    // const [namaVariable, setNamaVariable] = useState(initialState)
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   effect
    //   return () => {
    //     cleanup
    //   }
    // }, [input])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, [posts]);

    // useEffect -> mount and updating
    // useEffect(() => {
    //   setCount(1000);
    // });

    useEffect(() => {
        document.title = `count = ${count}`;
    }, [count]);

    const addCount = () => {
        setCount(count + 1);
    };

    const subCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={addCount}>+</button>
                <button onClick={subCount}>-</button>
            </div>
            {posts.map((item) => (
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Hook;
