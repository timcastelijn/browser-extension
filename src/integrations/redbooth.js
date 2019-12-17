/*jslint indent: 2 */
/*global $: false, document: false, clockifyButton: false*/

'use strict';

// Right side panel
clockifyButton.render('.js-right-pane .tb-element-big:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = $('.tb-element-title', elem),
        workspaceElem = $('.tb-element-subtitle a:nth-child(1)', elem),
        tasklistElem = $('.tb-element-subtitle a:nth-child(3)', elem),
        titleElem = $('.js-element-title-inner a', container);

        if (tasklistElem.textContent) {
          console.log( 'tasklistElem text', tasklistElem.textContent );
        }


        link = clockifyButton.createButton(titleElem.textContent, tasklistElem.textContent );

        container.appendChild(link);
});


// Modal window
clockifyButton.render('.js-modal-dialog-content:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = $('.tb-element-title', elem),
        workspaceElem = $('.tb-element-subtitle a:nth-child(1)', elem),
        tasklistElem = $('.tb-element-subtitle a:nth-child(3)', elem),
        titleElem = $('.js-element-title-inner a', container);

        if (tasklistElem.textContent) {
          console.log( 'tasklistElem text', tasklistElem.textContent );
        }

        link = clockifyButton.createButton(titleElem.textContent, tasklistElem.textContent );

        container.appendChild(link);
});
