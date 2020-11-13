import React, { useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import DataWodService from "../../services/DataWod";
import RefreshButton from "../RefreshButton";
import AddWod from "./AddWod";

const TrieCourt = () => {
  const [wods, setWods] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWods();
  }, []);

  const getWods = () => {
    DataWodService.getAll()
      .then(response => {
        setWods(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  //search filter bar
  const filteredTasks = wods.filter(mvt => {
    return mvt.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="PositionDansHerder">
      <Form.Group className="searchBarContainer">
        <Form.Control className="text-center" size="lg" type="text" placeholder="Search..." onChange={ e => setSearch(e.target.value)}/>
      </Form.Group>

      <div className="d-flex justify-content-around">
        <RefreshButton />
        <AddWod />
      </div>

      <div className="container mt-4 mb-4">

      {filteredTasks.filter((wodCourt) => wodCourt.duration === "court").filter((team) => team.team === "non").map(
        (filteredWodCourt) => (
          <div className="wod-container">
            <ul className="list-group col">
              <li className="list-group-item shadow-lg">
                {filteredWodCourt.description.toUpperCase()}
              </li>
              <li className="list-group-item shadow-lg">
              {/* filteredWodCourt est une chaine de caractères. Donc avec .split('\n'), je change le bloc chaine de caractère en tableau à chaque fois qu'il map un \n.
              Donc chaque parti entre des \n deviens un tableau (.split fonctionne avec un chaine de caracteres).
              Mais pour .map, pour mapper, je ne peux que mapper un tableau.
              Donc l'idée était de transformer les chaines de caractères en tableau. */}
               {filteredWodCourt.title.split('\n').map(str => <p>{str}</p>)}
              </li>
              <li className="list-group-item shadow-lg">
                {filteredWodCourt.team}
              </li>
            </ul>
          </div>
        )
      )}
      </div>
    </div>
  );
};

export default TrieCourt;
