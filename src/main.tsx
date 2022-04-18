import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import './index.css'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
   <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

