"use strict";

// eslint-disable-next-line no-unused-vars
class OOBS {
    constructor(options = {}) {
        // eslint-disable-next-line no-param-reassign
        options = {
            "append": false,
            "container": "body",
            // eslint-disable-next-line no-mixed-operators, no-magic-numbers, no-bitwise
            "id": new Date().getTime() + (Math.random() * 9999999 | 1),
            // eslint-disable-next-line no-magic-numbers
            "type": this.constructor.name.toLowerCase().substr(4),
            ...options
        };
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
     * @param {String|Array|Function} value Document it
     *
     * @return {Object} Returns OOBS Object
     */
    addClass(value) {
        if (typeof value === "function")
            value = value(this); // eslint-disable-line no-param-reassign
        if (typeof value === "string")
            this.getElement().classList.add(value);
        else if (Array.isArray(value))
            name.forEach((name) => this.getElement().classList.add(name));
        return this;
    }

    /**
     *
     * Removes the specified class values.
     *
     * Note: Removing a class that does not exist does NOT throw an error.
     *
     * @param {String|Array|Function} value Document it
     *
     * @return {Object} Returns OOBS Object
     */
    removeClass(value) {
        if (typeof value === "function")
            value = value(this); // eslint-disable-line no-param-reassign
        if (typeof value === "string")
            this.getElement().classList.remove(value);
        else if (Array.isArray(value))
            name.forEach((name) => this.getElement().classList.remove(name));
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
     * @param {String|Array|Function} value Document it
     * @param {Boolean} state Document it
     *
     * @return {Object} Returns OOBS Object
     */
    toggleClass(value, state) {
        if (typeof value === "function")
            value = value(this); // eslint-disable-line no-param-reassign
        if (typeof value === "string")
            this.getElement().classList.toggle(value, state);
        else if (Array.isArray(value))
            name.forEach((name) => this.getElement().classList.toggle(name, state));
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
        return this.getElement().classList.replace(oldName, newName);
    }
}
