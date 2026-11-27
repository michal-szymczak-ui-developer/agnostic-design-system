import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import generated from '../../dist/tokens/chakra.json';

// Chakra defaults plus our tokens. Source of truth: tokens/*.json.
export const system = createSystem(defaultConfig, defineConfig(generated));
