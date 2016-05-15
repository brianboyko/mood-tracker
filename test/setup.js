process.env.NODE_ENV = "testing";

import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body><div id="root" /></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
