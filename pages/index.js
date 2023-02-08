import {useState} from 'react';

function Header({title}) {
        return <h1>{title ? title : 'default title'}</h1>;
    }

   export default function HomePage() {

        const names = ['Luna Lovelace', 'Ada Lovelace', 'Sarah E. Goode'];

        const [likes, setLikes] = useState(0);

        function handleClick() {
            setLikes(likes + 1);
        }

        return (
            <div>
                <Header title = "Develop. Ship. Preview."/>
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>

                <button onClick={handleClick}>Like({likes})</button>
            </div>
        );
    }
