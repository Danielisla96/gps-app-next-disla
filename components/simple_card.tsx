import { Button, Card, Text, Heading, Theme, defaultDarkModeOverride, ColorMode } from "@aws-amplify/ui-react";
import { ThemeProvider } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

const SimpleCard: React.FC = () => {
  const { theme } = useTheme();
  const [amplifyColorMode, setAmplifyColorMode] = useState<ColorMode | undefined>(undefined);

  useEffect(() => {
    if (theme) {
      setAmplifyColorMode(theme === 'dark' ? 'dark' : 'light');
    }
  }, [theme]);

  const themes = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  if (!amplifyColorMode) return null;

  return (
    <ThemeProvider theme={themes} colorMode={amplifyColorMode}>
      <Card variation="outlined">
        <Heading level={6}>Heading text</Heading>
        <Text>Some sample text for this card.</Text>
      </Card>
    </ThemeProvider>
  );
}

export default SimpleCard;
