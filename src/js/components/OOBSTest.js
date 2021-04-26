"use strict";

// eslint-disable-next-line no-unused-vars
class OOBSTest extends OOBS {

    constructor (options = {}) {
        // eslint-disable-next-line no-param-reassign
        options = {
            ...options
        };
        const documentFragment = new DocumentFragment();
        super(options, documentFragment);
    }

}
