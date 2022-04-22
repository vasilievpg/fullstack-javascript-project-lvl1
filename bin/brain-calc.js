#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../games/calc.js';
import run from '../src/game-engine.js';

run(description, getQuestionAndAnswer);
