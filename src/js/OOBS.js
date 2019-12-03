"use strict";

/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */

// eslint-disable-next-line no-unused-vars
class OOBS {
    constructor(options = {}, documentFragment) {
        try {
            // eslint-disable-next-line no-param-reassign
            options = {
                "attach": "append",
                "container": "body",
                // eslint-disable-next-line no-mixed-operators, no-magic-numbers, no-bitwise
                "id": new Date().getTime() + (Math.random() * 999999999 | 1),
                // eslint-disable-next-line no-magic-numbers
                "type": this.constructor.name.toLowerCase().substr(4),
                ...options
            };
            const containerElement = document.querySelector(options.container);
            if (containerElement === null) {
                // eslint-disable-next-line no-console
                console.error(`Continer ${options.container} not found.`);
                return;
            }
            // eslint-disable-next-line one-var
            const componentDiv = document.createElement("div");
            componentDiv.id = `${options.type}-${options.id}`;
            componentDiv.appendChild(documentFragment);
            options.attach = (options.attach || "").toLowerCase();
            if (options.attach === "append") {

            } else if (options.attach === "prepend") {

            } else if (options.attach === "replace") {
                
            }
        } catch (exception) {
            // eslint-disable-next-line no-console
            console.error(exception);
        }
        // eslint-disable-next-line no-underscore-dangle
        let _element = document.getElementById(options.id);

        /**
         *
         * Document it
         *
         * @param {String} name Document it
         *
         * @return {Object} Document it
         */
        this.getElement = () => _element;

        /**
         *
         * Document it
         *
         * @return {Object} Document it
         */
        this.dispose = () => {
            if (_element)
                _element.parentNode.removeChild(_element);
            _element = null;
            this.options = null;
        };
    }

    /**
     *
     * Adds the specified class values. If these classes already exist in the element's class attribute they are
     * ignored.
     *
     * @param {String|Array} value Document it
     *
     * @return {Object} Returns OOBS Object
     */
    addClass(value = []) {
        [...value].forEach((name) => this.getElement().classList.add(name));
        return this;
    }

    /**
     *
     * Removes the specified class values.
     *
     * Note: Removing a class that does not exist does NOT throw an error.
     *
     * @param {String|Array} value Document it
     *
     * @return {Object} Returns OOBS Object
     */
    removeClass(value = []) {
        [...value].forEach((name) => this.getElement().classList.remove(name));
        return this;
    }

    /**
     *
     * When only one argument is present: Toggle the class value; i.e., if the class exists then remove it
     * and return false, if not, then add it and return true.
     *
     * When a second argument is present: If the second argument evaluates to true, add the specified class
     * value, and if it evaluates to false, remove it.
     *
     * @param {String|Array} value Document it
     * @param {Boolean} state Document it
     *
     * @return {Object} Returns OOBS Object
     */
    toggleClass(value = [], state) {
        [...value].forEach((name) => this.getElement().classList.toggle(name, state));
        return this;
    }

    /**
     *
     * Document it
     *
     * @return {Array} Document it
     */
    getClasses() {
        return [...this.getElement().classList];
    }

    /**
     *
     * Document it
     *
     * @param {String} name Document it
     *
     * @return {Object} Document it
     */
    hasClass(name) {
        return this.getElement().classList.contains(name);
    }

    /**
     *
     * Document it
     *
     * @param {String} oldName Document it
     * @param {String} newName Document it
     *
     * @return {Object} Document it
     */
    replaceClass(oldName, newName) {
        this.getElement().classList.replace(oldName, newName);
        return this;
    }

    /**
     *
     *  Document it
     *
     * @param  {Boolean} state Document it
     *
     * @return {Object} Document it
     */
    setVisible(state) {
        if (typeof state === "undefined") {
            if (this.hasClass("visible"))
                this.replaceClass("visible", "invisible");
            else if (this.hasClass("invisible"))
                this.replaceClass("invisible", "visible");
            else
                this.addClass("visible");
        } else if (state) {
            this.removeClass("invisible");
            this.addClass("visible");
        } else {
            this.removeClass("visible");
            this.addClass("invisible");
        }
        return this;
    }

}