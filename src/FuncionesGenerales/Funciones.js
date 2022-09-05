export const SwitchColorBox=(color)=>{
    
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