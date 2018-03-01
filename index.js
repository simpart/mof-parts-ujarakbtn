/**
 * @file   mofron-comp-button-ujarak/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Button = require('mofron-comp-button');
let Mover  = require('mofron-event-mouseover');
let Mout   = require('mofron-event-mouseout');

/**
 * @class mofron.comp.button.Ujarak
 * @brief ujarak button class
 */
mofron.comp.UjarakBtn = class extends Button {
    
    /**
     * initialize component
     *
     * @param prm (string,option) : button contents
     * @param opt (array) : option
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('UjarakBtn');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            this.initStyleTag();
            
            this.style({
                'display'    : 'block'    ,
                'margin'     : '0px'      ,
                'border'     : '1px solid ' + this.color().getStyle(),
                'background' : 'none'     ,
                'position'   : 'relative' ,
                'z-index'    : '1'        ,
                
                '-webkit-backface-visibility' : 'hidden',
                '-moz-backface-visibility'    : 'hidden',
                'backface-visibility'         : 'hidden',
                
                '-webkit-transition' : 'border-color 0.4s, color 0.4s',
                '-moz-transition'    : 'border-color 0.4s, color 0.4s',
                '-o-transition'      : 'border-color 0.4s, color 0.4s',
                'transition'         : 'border-color 0.4s, color 0.4s',
                
                '-webkit-transition-timing-function' : 'cubic-bezier(0.2, 1, 0.3, 1)',
                '-moz-transition-timing-function'    : 'cubic-bezier(0.2, 1, 0.3, 1)',
                '-o-transition-timing-function'      : 'cubic-bezier(0.2, 1, 0.3, 1)',
                '-ms-transition-timing-function'     : 'cubic-bezier(0.2, 1, 0.3, 1)',
                'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)'
            });
            
            this.initTxtColor();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initStyleTag () {
        try {
            let selector = 'button-ujarak';
            this.target().className(selector);
            if (true === mf.comp.UjarakBtn_init) {
                return;
            }
            mf.comp.UjarakBtn_init = true;
            
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [
                    mf.func.getStyleConts(
                        '.' + selector + ':focus',
                        { 'outline' : 'none' }
                    ),
                    mf.func.getStyleConts(
                        '.' + selector + ':before',
                        { 'content'     : "''"      ,
                          'position'    : 'absolute',
                          'top'         : '0'       ,
                          'left'        : '0'       ,
                          'width'       : '100%'    ,
                          'height'      : '100%'    ,
                          'z-index'     : '-1'      ,
                          'opacity'     : '0'       ,
                          
                          '-webkit-transform'  : 'scale3d(0.7, 1, 1)',
                          '-moz-transition'    : 'scale3d(0.7, 1, 1)',
                          '-o-transition'      : 'scale3d(0.7, 1, 1)',
                          'transform'          : 'scale3d(0.7, 1, 1)',
                          '-webkit-transition' : '-webkit-transform 0.4s, opacity 0.4s',
                          '-moz-transition'    : '-moz-transform 0.4s, opacity 0.4s'   ,
                          '-o-transition'      : '-o-transform 0.4s, opacity 0.4s'     ,
                          'transition'         : 'transform 0.4s, opacity 0.4s'        ,
                          
                          '-webkit-transition-timing-function' : 'cubic-bezier(0.2, 1, 0.3, 1)',
                          '-moz-transition-timing-function'    : 'cubic-bezier(0.2, 1, 0.3, 1)',
                          '-o-transition-timing-function'      : 'cubic-bezier(0.2, 1, 0.3, 1)',
                          '-ms-transition-timing-function'     : 'cubic-bezier(0.2, 1, 0.3, 1)',
                          'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)' }
                    ),
                    mf.func.getStyleConts(
                        '.' + selector + ':hover::before',
                        { 'opacity'            : '1',
                          '-webkit-transform'  : 'translate3d(0, 0, 0)',
                          '-moz-transition'    : 'translate3d(0, 0, 0)',
                          '-o-transition'      : 'translate3d(0, 0, 0)',
                          'transform'          : 'translate3d(0, 0, 0)' }
                    )
                ]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initTxtColor () {
        try {
            this.text().color(
                new mf.Color(0,0,0)
            );
            
            this.event([
                new Mover(
                    (btn) => {
                        try {
                            var rgb = btn.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                btn.child()[0].color(
                                    new mf.Color(255,255,255)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },this
                ),
                new Mout(
                    (btn) => {
                        try {
                            var rgb = btn.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                btn.child()[0].color(
                                    new mf.Color(0,0,0)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }, this
                )
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                if (undefined === this.m_color) {
                    let thm_clr = this.theme().color();
                    this.color(
                        (null === thm_clr) ? new mf.Color(37,113,130) : thm_clr[0]
                    );
                }
                return this.m_color;
            }
            /* setter */
            if (false === mf.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.m_color = clr;
            this.style({ 'border' : '1px solid ' + this.color().getStyle() });
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [ mf.func.getStyleConts(
                                 '#' + this.styleTgt().getId() + ':before',
                                 { 'background'  : this.color().getStyle() }
                             )]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mf.func.getLength(this.style('min-width'));
            }
            /* setter */
            if ('number' === (typeof val)) {
                this.style({
                    'min-width' : val + 'px',
                    'max-width' : val + 'px'
                });
            } else if ('string' === (typeof val)) {
                this.style({
                    'min-width' : val,
                    'max-width' : val
                });
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.UjarakBtn_init = false;
module.exports = mofron.comp.UjarakBtn;
