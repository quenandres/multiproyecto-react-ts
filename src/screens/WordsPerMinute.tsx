import { useEffect, useState } from "react";

const WORDS = [
    "tramar",
    "senda",
    "tapizar",
    "permanente",
    "silenciador",
    "caracol",
    "arrestar",
    "rastrillar",
    "cobarde",
    "francesa",
    "tarot"
];
export default function WordsPerMinute() {
    const [word, setWord ] = useState(() => WORDS[(Math.random() * WORDS.length) | 0]);
    const [characterCount, setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState("");
    const [time, setTime] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( buffer === word ) {
            setWord(WORDS[(Math.random() * WORDS.length) | 0]);
            setCharacterCount((characterCount) => characterCount + word.length);
        }
        setBuffer("");
    }

    useEffect(() => {
        if( time === 0 ) {
            return ;
        }

        const id = setInterval(() => setTime(time - 1), 1000);

        return () => clearInterval(id);

    }, [time]);

     
    return (
        <div style={{display:"flex", flexDirection: "column", gap: 12, textAlign: "center"}}>        
        { Boolean(time) && <h1 style={{fontSize: 48}}>{word}</h1>}
        <h2>Characters types {characterCount}</h2>
        <h2>Remaining time {time}</h2>
        {
            time ? <form onSubmit={handleSubmit}>
            <input 
                type="text"
                autoFocus
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form> : <button onClick={() => setTime(60)}>Play</button>
        }        
        </div>
    );
}