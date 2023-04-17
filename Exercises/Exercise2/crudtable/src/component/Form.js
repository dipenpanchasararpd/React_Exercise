import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            alert('Please enter both First Name and Last Name');
            return;
        }

        const existingEntry = data.find(
            (item) =>
                item.firstName.toLowerCase() === firstName.toLowerCase() &&
                item.lastName.toLowerCase() === lastName.toLowerCase()
        );
        if (existingEntry) {
            alert('This entry already exists');
            return;
        }

        if (isUpdate) {
            const newData = data.map((item) => {
                if (item.id === updateId) {
                    return { ...item, firstName, lastName };
                } else {
                    return item;
                }
            });
            setData(newData);
            setFirstName('');
            setLastName('');
            setIsUpdate(false);
            setUpdateId(null);
        } else {
            const newData = [...data, { id: Date.now(), firstName, lastName }];
            setData(newData);
            setFirstName('');
            setLastName('');
        }
    };

    const handleEdit = (id) => {
        const itemToEdit = data.find((item) => item.id === id);
        setFirstName(itemToEdit.firstName);
        setLastName(itemToEdit.lastName);
        setIsUpdate(true);
        setUpdateId(id);
    };

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
        setFirstName('');
        setLastName('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {isUpdate ? 'Update' : 'Add'}
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(item.id)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ContactForm;
