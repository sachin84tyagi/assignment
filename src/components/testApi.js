import React, { Component } from 'react';

import axios from 'axios'

class TestApi extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const URL = "https://jsonplaceholder.typicode.com/posts/1";

        const URL2 = "https://swapi.co/api/people/1"

        const { data } = await axios.get(URL2);
        console.log(data);
        //this.setState({ data: result })
    }
    render() {
        return (
            <div>


            </div>
        );
    }
}

export default TestApi;