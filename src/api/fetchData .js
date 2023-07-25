import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';

function ApiCall() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData()
            .then(data => setData(data))
            .catch(error => {
                console.error('Er ging iets mis:', error);
            });
    }, []);

    if (!data) return 'Data aan het laden...';

    return (
        <div>
            <h1>Posts van JSONPlaceholder:</h1>
            {data.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default ApiCall;
