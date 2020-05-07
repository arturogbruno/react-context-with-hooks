import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDarkMode: false
        }

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({isDarkMode: !this.state.isDarkMode});
    }

    render() {
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeContext, ThemeProvider };