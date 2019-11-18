"use strict";

// eslint-disable-next-line no-unused-vars
class OOBS {
    constructor(options = {}) {
        // eslint-disable-next-line no-underscore-dangle
        const _element = document.getElementById(options.id);
        this.getElement = () => _element;
    }

    /**
     *
     * Document it
     *
     * @param {String} name Document it
     *
     * @return {Object} Document it
     */
    addClass(name) {
        this.get$().addClass(name);
        return this;
    }


    /**
     *
     * Document it
     *
     * @return {Array} Document it
     */
    getClassList() {
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
        return this.get$().hasClass(name);
    }

    attr(attributeName, value) {
        return this;
    }


    /**
     *
     * Document it
     *
     * @return {Object} Document it
     */
    get$() {
        return $(`#${this.id}`);
    }


    /**
     *
     * Document it
     *
     * @param {Array} pStrArrNames Document it
     *
     * @return {Object} Document it
     */
    getStyle(...pStrArrNames) {
        return this.get$().css(pStrArrNames);
    }


    /**
     *
     * Document it
     *
     * @param {String|Object} pStrNameOrObjProperties Document it
     * @param {String|Number|Function} pStrOrNumValueOrFun Document it
     *
     * @return {Object} Document it
     */
    setStyle(pStrNameOrObjProperties, pStrOrNumValueOrFun) {
        return this.get$().css(pStrNameOrObjProperties, pStrOrNumValueOrFun);
    }

    height(value) {
        return this;
    }

    html(value) {
        return this;
    }

    innerHeight(value) {
        return this;
    }

    innerWidth(value) {
        return this;
    }

    offset(coordinates) {
        return this;
    }

    offsetParent() {
        return this;
    }

    outerHeight(value, includeMargin) {
        return this;
    }

    outerWidth(value, includeMargin) {
        return this;
    }

    position() {
        return this;
    }

    prop(propertyName, value) {
        return this;
    }

    removeAttr(attributeName) {
        return this;
    }

    removeClass(value) {
        return this;
    }

    removeProp(propertyName) {
        return this;
    }

    scrollLeft(value) {
        return this;
    }

    scrollTop(value) {
        return this;
    }

    toggleClass(value, state) {
        return this;
    }

    width(value) {
        return this;
    }
}
