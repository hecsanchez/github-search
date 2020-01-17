import React, { useState } from 'react';

import { Alert, Button, Container, Form, Input, List } from 'components';
import * as API from 'api';

const Search = () => {
    const [username, setUsername] = useState('');
    const [items, setItems] = useState({});
    const [error, setError] = useState(null);

    const handleSubmit = async() => {
        const results = await API.fetchUser(username);
        if (results.error) {
            setError(results.error.response.status)
        } else {
            setItems(results)
        }
    }

    const handleOnChange = async(e) => {
        setUsername(e.target.value)
    }


    return (
        <Container>
            <Form>
                <Input 
                    onChange={handleOnChange}
                    value={username}
                    placeholder='Type in github username'
                />
                <Button 
                    onClick={handleSubmit}
                > 
                    Search on github
                </Button>
            </Form>
            <List items={items}/>
            {error && <Alert error={error} />}
        </Container>
    );

};

export default Search;