#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../games/prime.js';
import run from '../src/game-engine.js';

run(description, getQuestionAndAnswer);
