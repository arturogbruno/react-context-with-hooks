import React, { useContext } from "react";
import { LanguageContext } from '../contexts/LanguageContext';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/FormStyles";

const text = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        rememberMe: "Remember me"
    },
    french: {
        signIn: "Se Connecter",
        email: "Adresse électronique",
        password: "Mot de passe",
        rememberMe: "Souviens-toi de moi"
    },
    spanish: {
        signIn: "Registrarse",
        email: "Correo electrónico",
        password: "Contraseña",
        rememberMe: "Recuérdame"
    }
}

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext);
    const { signIn, email, password, rememberMe } = text[language];
    const { classes } = props;

    return(
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email"></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password"></Input>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={rememberMe}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submit}
                    >
                        {signIn}
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

export default withStyles(styles)(Form);
