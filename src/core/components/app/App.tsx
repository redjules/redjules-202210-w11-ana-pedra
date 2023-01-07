import React from 'react';
import { Form } from '../form/form';
import { Header } from '../header/header';

function App() {
    return (
        <div className="container">
            <Header></Header>
            <main>
                <Form></Form>
            </main>
        </div>
    );
}

export default App;
