"use strict";
$(function () {
    var $window = $(window), $top_link = $('#toplink'), $body = $('body, html'), offset = $('#code').offset().top, hidePopover = function ($target) {
        $target.data('popover-hover', false);
        setTimeout(function () {
            if (!$target.data('popover-hover')) {
                $target.popover('hide');
            }
        }, 300);
    };
    $top_link.hide().click(function (event) {
        event.preventDefault();
        $body.animate({ scrollTop: 0 }, 800);
    });
    $window.scroll(function () {
        if ($window.scrollTop() > offset) {
            $top_link.fadeIn();
        }
        else {
            $top_link.fadeOut();
        }
    }).scroll();
    $('.popin')
        .popover({ trigger: 'manual' })
        .on({
        'mouseenter.popover': function () {
            var $target = $(this);
            var $container = $target.children().first();
            $target.data('popover-hover', true);
            if ($target.next('.popover').length) {
                return;
            }
            $container.popover('show');
            $target.next('.popover:not(.popover-initialized)')
                .on({
                'mouseenter': function () {
                    $target.data('popover-hover', true);
                },
                'mouseleave': function () {
                    hidePopover($container);
                }
            })
                .addClass('popover-initialized');
        },
        'mouseleave.popover': function () {
            hidePopover($(this).children().first());
        }
    });
});
//# sourceMappingURL=file.js.map