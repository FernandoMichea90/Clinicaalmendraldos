import React,{useState,useEffect} from 'react';
import Chip from '@material-ui/core/Chip';
export default function ColorChips(props) {

    const [Color, setColor] = useState()
    const switchColor = (color) => {
        switch (color.trim()) {
            case "rojo":
                  setColor("rgb(245, 0, 87)")  
                break;
            case "azul":
                 setColor("rgb(34, 96, 136)")
                break;
            case "celeste":
                setColor('rgb(95, 206, 214)')
                break;
            case "amarillo":
                setColor("rgb(226, 168, 46)")
                break;
            default:
                break;
        }
    }

    useEffect(() => {

        switchColor(props.id)


    }, [])


    return (
        <>
            <Chip label={props.id} style={{background:Color,color:'#ffffff'}} />

        </>

    );
}