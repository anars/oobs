"use strict";

/* eslint-disable padded-blocks */
// eslint-disable-next-line no-unused-vars
class OOBS {
    constructor(options = {}) {}

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
     * @param {Array} ...name Document it
     *
     * @return {Object} Document it
     */
    getComputedStyle(...name) {
        return this.get$().css(name);
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