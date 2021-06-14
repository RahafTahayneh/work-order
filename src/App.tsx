import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { observer, Provider as MOBXProvider } from "mobx-react";
import theme from "./theme";
import {mobxStores} from "./store";
import {Router} from "./router";


const  App: React.FC = observer(() => {
  return (
      <MOBXProvider {...mobxStores}>
        <ThemeProvider theme={createMuiTheme(theme)}>
            <Router />
        </ThemeProvider>
      </MOBXProvider>
  );
})

export default App;
