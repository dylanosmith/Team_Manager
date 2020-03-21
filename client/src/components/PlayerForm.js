import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "@reach/router";

const PlayerForm = () => {
    const [form, setForm] = useState({
        name: "",
        position: "",
        submitted: false
    });

    const isFormValid = {
        name: false,
        postion:false,
        val: ""
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players/new", {
            name: form.name,
            position: form.position
        })
        .then(res => {
            console.log(res);
            setForm({
                name: "",
                position: "",
                submitted: true
            });
            window.location.href = "/"
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to = "/">Home</Link>
            <h2>Add a new bruh:</h2>
            <form onSubmit={onSubmitHandler}>
                {form.submitted && "The new playa has been successfully added!"}
                <p>
                    <label>Playuh Name:</label><br/>
                    <input type="text" name="name" value={form.name} onChange = {(e)=>setForm({...form, [e.target.name]: e.target.value})}/>
                    {form.name.length > 0 && form.name.length < 2 && (
                        <span>Name must be at least two characters!</span>
                    )}
                </p>
                <p>
                    <label>Preferred position:</label><br/>
                    <input type = "text" name="position" value={form.position} onChange = {(e) =>setForm({...form,[ e.target.name ]: e.target.value})}/>
                    {form.position.length > 0 && form.position.length < 2 && (
                        <span>Position must be at least two characters!</span>
                    )}
                </p>
                <Link to="/"><button>Cancel</button></Link>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default PlayerForm;