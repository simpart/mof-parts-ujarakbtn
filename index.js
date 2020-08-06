/**
 * @file mofron-comp-button-ujarak/index.js
 * @brief ujarak button component for mofron
 *        this source based on the codrops: https://github.com/codrops/ButtonStylesInspiration
 * @attention this component doesn't support baseColor function.
 * @license MIT
 */
const Button  = require('mofron-comp-button');
const Hover   = require('mofron-event-hover');
const Fade    = require('mofron-effect-fade');
const Scale   = require('mofron-effect-scale');
const Style   = require('mofron-effect-style');
const Border  = require('mofron-effect-border');
const comutl  = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends Button {
    /**
     * initialize component
     *
     * @param (mixed) string: button text contents
     *                    dict: button component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('UjarakBtn');
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contens
     * 
     * @type private
     */
    initDomConts() {
        try {
            super.initDomConts();

            this.style({
                'background': 'none',        // disabled button style
                'position'  : 'relative',
		'-webkit-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
		'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)'
   
            });
            
	    let bef = {
                "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
		"transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
                "content": '""',
	        "position": "absolute",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "background": "#37474f",
                "z-index": "-1",
                "opacity": "0",
                "-webkit-transform": "scale3d(0.7, 1, 1)",
                "transform": "scale3d(0.7, 1, 1)",
                "-webkit-transition": "-webkit-transform 0.4s, opacity 0.4s",
                "transition": "transform 0.4s, opacity 0.4s",
                "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
                "transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)"
	    };
	    let hovbef = {
                "opacity": "1",
                "-webkit-transform": "translate3d(0, 0, 0)",
                "transform": "translate3d(0, 0, 0)"
	    }

            let addstyle = comutl.obj2style("#" + this.rootDom()[0].id() + "::before", bef) + "\n";
	    addstyle += comutl.obj2style("#" + this.rootDom()[0].id() + ":hover::before", hovbef) + "\n";
	    comutl.addhead("style", {id: this.id() + "_style"}, addstyle);
            
	    let ujrk = this;
            let invert = (h1,h2) => {
                try {
		    let eid = null;
		    if (true === h2) {
                        eid = 2;
		    } else {
		        eid = 3;
                    }
		    ujrk.text().execEffect(eid);
		} catch (e) {
                    console.error(e.stack);
                    throw e;
		}
	    }
	    this.text().effect([
	        new Style({ "style" : { "color" : "rgb(255,255,255)" }, eid:2, speed:400 }),
		new Style({ "style" : { "color" : null }, eid:3, speed:400 }),
            ]);
	    this.text().event(new Hover(invert));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text contents setter/getter
     * 
     * @param (mixed) string: button text contents
     *                mofron-comp-text: button text component
     *                undefined: call as getter
     * @return (mofron-comp-text) button text contents 
     * @type parameter
     */
    text (prm) {
        try {
            if (true === comutl.isinc(prm, "Text")) {
                prm.style({ 'position': 'relative', 'z-index': '1' });
            }
            return super.text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text color setter/getter
     * 
     * @param (mixed (color)) string: button text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: calla as getter
     * @param (dict) style option
     * @return (mixed) button text color
     *                 null: not set yet
     * @type parameter
     */
    mainColor (prm,opt) {
        try {
	    this.text().effect({ name: "Style", eid: 3 }).style({
	        "color" : comutl.getcolor(prm).toString()
            });
	    return this.text().mainColor(prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    baseColor (prm) {
        try {
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * hover base color setter/getter
     * 
     * @param (mixed (color)) string: hover color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: calla as getter
     * @return (mixed) hover color
     *                 null: not set yet
     * @type parameter
     */
    accentColor (prm) {
        try {
	    let bef = { "background" : prm };
            let addstyle = comutl.obj2style("#" + this.rootDom()[0].id() + "::before", bef) + "\n";
            comutl.addhead("style", {id: this.id() + "_basecolor"}, addstyle);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
