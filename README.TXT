1. Why Redux?
    - One Store
    - Reduce Boilerplate 
    - Isomorphic/Universal Friendly
    - Immutable Store
    - Hot reloading
    - Time-travel debugging
    - Small

2. Setup environment.
    - #JavaScriptFatigue

3. Added all configuttion files to use during development.

4. cmd: npm start -s
    What this does? 
        - Run the "Start" script point from package.json, the code snippet
            "scripts": {
                "start": "babel-node tools/srcServer.js"
                },
    
    Expected result: The web page of index.html in the browser.

5. Added lint. Cmd to check: npm run lint

6. Added test. Cmd to run: npm test

7. ES6, the difference from ES5
    - No autobind
        * binding directly for compoment
            <div onClick={this.handleClick.bind(this)}</div>
        
        * binding with using the constructor
            constructor(props){
                super(props);
                this.handleClick = this.handleClick.bind(this);
            }

    - PropTypes declared separately
    - Default props declared separately
    - Set initial state in constructor
    - Recommended use "const" instead of "var"
        const HelloWorld = (props) => {
            return (
                <h1> Hello World</h1>
            );
        };
    - Stateless component usage.

7. Container and Presentation react components.
    - Container:
        * Little to no markup
        * Pass data and actions down
        * Knows about Redux
        * Often stateful
            or in jargon
        * Smart
        * Stateful
        * Controller View

    - Presentation:
        * Nearly all markup
        * Receive data and actions via props
        * Doesn`t know about Redux
        *  Typically functional components
            or in jargon
        * Dumb
        * Stateless
        * View

    