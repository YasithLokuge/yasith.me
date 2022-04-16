import './terminal.css';
import { XTerm } from 'xterm-for-react'
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import React from 'react'

const shellprompt = '\x1B[1;36myasith@me:~$ \x1B[0m';

function command(xtermRef, state, setState) {


    if(state === "clear") {
        setState({ input: "" });
        createTerminal(xtermRef, state);
    } else if(state === "help") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.writeln("\x1B[1;93mls\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mpwd\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mcat\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mclear\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mcontact\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mcredits\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mblog\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mprivacy\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "pwd") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.writeln("\x1B[1;37m/home/yasith\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "ls") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.writeln("\x1B[1;37mabout.txt\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "contact") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.write("\x1B[1;93mplease connect with me on linkedin \x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;4;34mhttps://www.linkedin.com/in/yasithlokuge\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "blog") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.write("\x1B[1;93mLink to my personal blog \x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;4;34mhttps://blog.yasith.me\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "privacy") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.writeln("\x1B[1;93mThis website does not collect any personal information.\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mThis website is using Google Analytics and Google Tag manager 3rd party services.\x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;93mThese 3rd party services may collect cookies, usage, location, device & network related data.\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state === "credits") {
        xtermRef.current.terminal.write("\r\n");
        xtermRef.current.terminal.write("\x1B[1;93mcodercat \x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;4;34mhttps://codercat.tk/\x1B[0m");
        xtermRef.current.terminal.write("\x1B[1;93mAlvan Arulandu \x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;4;34mhttps://github.com/Claeb101/3d-ripple-animation\x1B[0m");
        xtermRef.current.terminal.write("\x1B[1;93mFavicon Generator \x1B[0m");
        xtermRef.current.terminal.writeln("\x1B[1;4;34mhttps://favicon.io/favicon-generator\x1B[0m");
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" });
    } else if(state.startsWith("cat")) {
        if(state.startsWith("cat ")) {
            if(state === "cat ") {
                xtermRef.current.terminal.write("\r\n");
                xtermRef.current.terminal.writeln("\x1B[1;37mUsage: cat <filename>\x1B[0m");
                xtermRef.current.terminal.write(shellprompt);
            } else if (state === "cat about.txt") {
                xtermRef.current.terminal.write("\r\n");
                xtermRef.current.terminal.writeln("\x1B[1;93mPersonal website of Yasith Lokuge\x1B[0m");
                xtermRef.current.terminal.write(shellprompt);
            } else {
                const filename = state.replace(/cat /g,'');
                xtermRef.current.terminal.write("\r\n");
                xtermRef.current.terminal.writeln("\x1B[1;37mUnable to find file: " + filename + "\x1B[0m");
                xtermRef.current.terminal.write(shellprompt);
            }
        } else {
            if(state === "cat") {
                xtermRef.current.terminal.write("\r\n");
                xtermRef.current.terminal.writeln("\x1B[1;37mUsage: cat <filename>\x1B[0m");
                xtermRef.current.terminal.write(shellprompt);
            } else {
                xtermRef.current.terminal.writeln(
                    "\r\n\x1B[0;34m command not found: " + state +  ", pls type help and hit enter for a list of commands\x1B[0m"
                );
                xtermRef.current.terminal.write(shellprompt);
            }
        }
        setState({ input: "" });
    } else {
        xtermRef.current.terminal.writeln(
            "\r\n\x1B[0;34m command not found: " + state +  ", pls type help and hit enter for a list of commands\x1B[0m"
        );
        xtermRef.current.terminal.write(shellprompt);
        setState({ input: "" })
    }
}

function createTerminal(xtermRef, state) {
    xtermRef.current.terminal.write('\x1b[2K\r')    
    xtermRef.current.terminal.clear();
    xtermRef.current.terminal.writeln("");

    state.isLarge ? logoLarge(xtermRef) : logoSmall(xtermRef);
    xtermRef.current.terminal.writeln("");
    xtermRef.current.terminal.writeln("\x1B[1;37mHi, I'am Yasith Lokuge. Welcome to my personal website.\x1B[0m");
    xtermRef.current.terminal.writeln("\x1B[2;37mpls type help and hit enter for a list of commands\x1B[0m");
    xtermRef.current.terminal.write(shellprompt);
}


function logoSmall(xtermRef) {
    xtermRef.current.terminal.writeln("\x1B[0;34m __  __         _ __  __ ");
    xtermRef.current.terminal.writeln("\x1B[0;36m \\ \\/ /__ ____ (_) /_/ / ");
    xtermRef.current.terminal.writeln("\x1B[0;93m  \\  / _ `(_-</ / __/ _ \\");
    xtermRef.current.terminal.writeln("\x1B[0;37m  /_/\\_,_/___/_/\\__/_//_/\x1B[0m");
}

function logoLarge(xtermRef) {
    xtermRef.current.terminal.writeln("\x1B[0;34m /$$     /$$                  /$$   /$$     /$$      ");
    xtermRef.current.terminal.writeln("\x1B[0;34m|  $$   /$$/                 |__/  | $$    | $$      ");
    xtermRef.current.terminal.writeln("\x1B[0;36m \\  $$ /$$//$$$$$$   /$$$$$$$ /$$ /$$$$$$  | $$$$$$$ ");
    xtermRef.current.terminal.writeln("\x1B[0;36m  \\  $$$$/|____  $$ /$$_____/| $$|_  $$_/  | $$__  $$");
    xtermRef.current.terminal.writeln("\x1B[0;93m   \\  $$/  /$$$$$$$|  $$$$$$ | $$  | $$    | $$  \\ $$");
    xtermRef.current.terminal.writeln("\x1B[0;93m    | $$  /$$__  $$ \\____  $$| $$  | $$ /$$| $$  | $$");
    xtermRef.current.terminal.writeln("\x1B[0;37m    | $$ |  $$$$$$$ /$$$$$$$/| $$  |  $$$$/| $$  | $$");
    xtermRef.current.terminal.writeln("\x1B[0;37m    |__/  \\_______/|_______/ |__/   \\___/  |__/  |__/\x1B[0m");
}

class Terminal extends React.Component {
    constructor(props) {
        super(props)
        // Create a ref
        this.xtermRef = React.createRef()
        this.fitAddon = new FitAddon();
        this.linksAddon = new WebLinksAddon();

        this.resizeObserver = null;
        this.resizeElement = React.createRef();

        this.state = { input: "" , rows: 35, cols: 1, isLarge: true };
    }

    componentDidMount() {
        this.resizeObserver = new ResizeObserver((entries) => {
            this.fitAddon.fit();
            const dimensions = this.fitAddon.proposeDimensions();
            this.setState({ rows: dimensions.rows, cols: dimensions.cols, isLarge: dimensions.cols >= 53 })
            createTerminal(this.xtermRef, this.state);
        });
      
        this.resizeObserver.observe(this.resizeElement.current);  
    }

    render() {
        return (
            // Create a new terminal and set it's ref.
            <div className="term-outer" ref={this.resizeElement}>
                <div className="term-inner">
                    <XTerm 
                        options={{
                            cursorBlink: "block",
                            scrollback: 1000,
                            tabStopWidth: 8,
                            rows: this.state.rows,
                            cols: this.state.cols,
                        }}
                        addons={[this.fitAddon, this.linksAddon]}
                        ref={this.xtermRef}
                        onResize={() => this.fitAddon.fit()}
                        onData={(data) => {
                            data = data.toLowerCase();
                            const code = data.charCodeAt(0);
                            // If the user hits empty and there is something typed echo it.
                            if (code === 13 && this.state.input.length > 0) {
                                this.fitAddon.fit();
                                command(this.xtermRef, this.state.input.toLowerCase(), (val) => this.setState(val))
                                this.setState({ input: "" });
                            } else if (code < 32) { // Disable control Keys such as arrow keys
                                return;
                            } else if (code === 127) {
                                this.setState({ input: this.state.input.substring(0, this.state.input.length - 1)});
                                // Do not delete the prompt
                                if (this.xtermRef.current.terminal._core.buffer.x > 13) {
                                    this.xtermRef.current.terminal.write('\b \b');
                                }
                                return;
                            } else { // Add general key press characters to the terminal
                                this.xtermRef.current.terminal.write(data);
                                this.setState({ input: this.state.input + data })
                            }
                        }} 
                    />
                </div>
            </div>
        )
    }
}

export default Terminal;