#!/usr/bin/env node

import even from '../src/even.js';
import welcome from '../src/cli.js';
const name = welcome();
even(name);