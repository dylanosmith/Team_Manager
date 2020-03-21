import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import axios from 'axios';

const PlayersList = () => {

    const [playerList, setPlayerList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            console.log(res);
            setPlayerList(res.data.players);
        })
        .catch(error => console.log(error))
    }, []);

    const Delete = (id) => {
        if(window.confirm("Confirm, you want to delete this player?"))
        {
            axios.delete(`http://localhost:8000/api/players/delete/${id}`)
            .then(res => {
                console.log(res);
                const filterList = playerList.filter(player => player._id !== id);
                setPlayerList(filterList);
            })
            .catch(error => console.log(error))
        }
    }
    

    return (
        <div>
            <Link to = "player/add">Add Player</Link>
            <table style ={{
                border: "1px solid black",
                width: "60vw",
                margin: "10px auto"
            }}>
                <thead style = {{
                    backgroundColor: "navy",
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "5px"
                }}>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                    {playerList.map((player, i) => (
                        <tr key={i}>
                            {console.log(player.name)}
                            <td className = "tableData">{player.name}</td>
                            <td className = "tableData">{player.position}</td>
                            <td className = "tableData">
                                <button className="btn btn-danger" onClick={() => Delete(player._id)}>Delete</button> </td>
                        </tr>
                            
                    ))}
                    </tbody>
                </table>
        </div>

    )
}

export default PlayersList;