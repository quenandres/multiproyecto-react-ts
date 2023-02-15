import { useEffect, useState } from "react";

const IMAGES = [
    "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/bitbucket-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/d3js-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/debian-plain.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/go-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
].flatMap(image => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);

export default function MemoTest() {

    const [ guessed, setGuessed ] = useState<string[]>([]);
    const [ selected, setSelected ] = useState<string[]>([]);
    useEffect(() => {        
        if( selected.length == 2 ) {
            const [,selected1] = selected[0].split("|");
            const [,selected2] = selected[1].split("|");

            if( selected1 === selected2 ) {
                setGuessed((guessed) => guessed.concat(selected));
            }
            
            setTimeout(() => setSelected([]), 1000);
            
        }
    }, [selected]);

    useEffect(() => {
        if( guessed.length == IMAGES.length ) {
            alert('Ganaste !!');
            setTimeout(() => setGuessed([]), 1500);
        }
    }, [guessed]);

    return (
        <main style={
            {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
                gap: "2px"
            }}>
        {
            IMAGES.map((image) => {
            const [,url] = image.split('|');
            return (
                <li 
                    onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}
                    style={{
                        border: '1px solid #999',
                        borderRadius: 12,
                        padding: 12,
                        cursor: 'pointer'
                    }}
                    key={image}
                >
                {
                    selected.includes(image) || guessed.includes(image) 
                    ? <img key={image} src={url}/> 
                    : <img key={image} src="https://icongr.am/clarity/search.svg?size=128&color=currentColor" />
                }                  
                </li>
            )})
        }
        </main>
    );
}