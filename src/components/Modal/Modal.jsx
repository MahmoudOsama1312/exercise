import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import port from "../../imgs/portfolio/cabin.png";
import cake from "../../imgs/portfolio/cake.png";
import circus from "../../imgs/portfolio/circus.png";
import game from "../../imgs/portfolio/game.png";
import safe from "../../imgs/portfolio/safe.png";
import submarine from "../../imgs/portfolio/submarine.png";
import './Modal.css';

function MyModal({ id, title, body, imageSrc, show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='lead '>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='lead'>
                <img src={imageSrc} alt=""  className='img-fluid'/>
                {body}
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
}

function MyComponent() {
    const items = [
        { id: 1, title: 'Port', imageSrc: port , body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem praesentium m doloremque saepe error expedita odio neque quibusdam eum, reiciendis dolor?' },
        { id: 2, title: 'Cake', imageSrc: cake, body: 'Cake is often served as a celebratory dish on ceremonial occasions, such as weddings, anniversaries, and birthdays. ' },
        { id: 3, title: 'Circus', imageSrc: circus , body: ' circus is a company of performers who put on diverse entertainment shows that may include clowns, acrobats, trained animals, trapeze acts, musicians, dancers, hoopers, tightrope walkers, jugglers, magicians, ventriloquists, and unicyclists ' },
        { id: 4, title: 'Submarine', imageSrc: submarine, body: 'Most large submarines consist of a cylindrical body with hemispherical (or conical) ends and a vertical structure, usually located amidships, that houses communications and sensing devices as well as periscopes. In modern submarines, this structure is the "sail" in American usage and "fin" in European usage.' },
        { id: 5, title: 'Safe', imageSrc: safe, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem praesentium m doloremque saepe error expedita odio neque quibusdam eum, reiciendis dolor?'},
        { id: 6, title: 'Game', imageSrc: game, body: 'A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool.'  },
    ];

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    const handleClose = () => {
        setSelectedItemId(null);
    };

    return (
        <div className="container text-center py-5 modals">
            <h1 className="text-uppercase">Portfolio</h1>
            <div className="divider2">
                <div className="divider-line2 mx-3"></div>
                <li className="fa-solid fa-star fa-2x"></li>
                <div className="divider-line2 mx-3"></div>
            </div>
            <div className="row py-3">
                {items.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-6 py-3 ">
                        <img className='img-fluid picture' src={item.imageSrc} alt={item.title} onClick={() => handleItemClick(item.id)} style={{ cursor: 'pointer' }} />
                    </div>
                ))}
            </div>

            {items.map((item) => (
                <MyModal key={item.id} id={item.id} title={item.title} body={item.body} imageSrc={item.imageSrc} show={selectedItemId === item.id} handleClose={handleClose} />
            ))}
        </div>
    );
}

export default MyComponent;
