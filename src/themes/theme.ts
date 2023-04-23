import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontSize: 18,
        h1: {
            lineHeight: 1.2
        },
        h2: {
            lineHeight: 1.2
        },

        h3: {
            lineHeight: 1.2
        },
        body1: {
            lineHeight: 1.6
        }
    },
})

export default theme
