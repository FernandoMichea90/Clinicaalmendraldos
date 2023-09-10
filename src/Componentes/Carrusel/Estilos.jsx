import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    principal: {
        '& button:focus': {
            backgroundColor: "#2ab7a9",
            color: "#ffffff"

        },
        '& .MuiButton-root:hover	': {

            color: "#5fced6",
            background: "#fff",
            border: "1px solid"

        },
        '& .CarouselItem': {

            [theme.breakpoints.down("md")]: {
                margin: "auto 11px"

            }

        },


    },


    root: {
        maxWidth: 345,
        height: '428px',
        margin: "10px auto"
    },
    media: {
        height: 200,
    },
    aLink: {
        textTransform: "uppercase",

        color: "#ffffff",
        backgroundColor: "rgb(95,206,214)"

    },

}));