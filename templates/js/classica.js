
/*
 *
 * Classica Template
 *
 */

(function() {
  var MMG;

  MMG = window.MMG;

  MMG.Templates.Classica = {};


  /*
  General Template
   */

  MMG.Templates.Classica.template = "<div class='<%=meta.NS %>-img <%= data.classList %>' data-image-id='<%= imageId %>'> <a class='<%=meta.NS %>-link' href='<%= data.pageHref %>' target='_blank'> </a> <div class='<%=meta.NS %>-icon-wrapper <%=meta.NS %>-fs'> <div class='<%=meta.NS %>-icon-container <%=meta.NS %>-fs'> <img class='<%=meta.NS %>-icon <%=meta.NS %>-fs' src='<%= data.src %>'> </div> </div> <div class='<%=meta.NS %>-caption-wrapper'> <div class='<%=meta.NS %>-f-caption'> <% if(data.title) { %> <div class='<%=meta.NS %>-title'> <%= data.title %> </div> <% } %> <% if(data.description) { %> <div class='<%=meta.NS %>-descr'> by <%= data.description %> </div> <% } %> </div> </div> <div class='<%=meta.NS %>-shutter'></div> <img data-src='<%= data.ownerIcon %>' src='' style='width:1px;height:1px;z-index:0;visibility:hidden;' class='swipe-owner-icon-hidden'> </div>";


  /*
  General Callback
   */

  MMG.Templates.Classica.callback = function() {
    var NS, NSclass, _removeHover, events, isMobile, loadIcon, root;
    NS = this.model.meta.NS;
    NSclass = this.model.meta.NSclass;
    root = this.model.meta.root;
    isMobile = this.model.meta.isMobile;
    root.addClass(NS + '-classica');
    loadIcon = function($item) {
      var $icon;
      $icon = $item.find('.swipe-owner-icon-hidden');
      $icon.attr('src', $icon.attr('data-src'));
    };
    $(root).on('click', '.mmg-img', function(e) {
      var $this;
      $this = $(this);
      loadIcon($this);
      loadIcon($this.next());
      loadIcon($this.prev());
    });

    /**
     *
     * Removes 'hover' classes
     *
     */
    _removeHover = function() {
      $(NSclass + 'hover, .hover', root.get(0)).each(function() {
        $(this).removeClass('hover').removeClass(NS + '-hover');
      });
    };
    if (isMobile) {

      /*
      this block is used to simulate effects
      on mobile devices
       */
      events = 'touchstart';
      if (/IEMobile/i.test(navigator.userAgent)) {
        events = 'MSPointerDown mouseenter';
      }
      $('body').on(events, function(event) {
        var image, target;
        target = $(event.target);
        if ($(event.target).hasClass(NS + '-shutter')) {
          image = target.parent();
          if (!image.hasClass(NS + '-hover')) {
            _removeHover();
            image.addClass(NS + '-hover');
            setTimeout((function() {
              image.addClass('hover');
              image = null;
            }), 500);
          }
        } else {
          if (!$(event.target).hasClass(NS + '-link')) {
            _removeHover();
          }
        }
      });
    } else {

      /*
      not mobile devices
       */
      root.on('mouseenter', NSclass + 'img ' + NSclass + 'shutter', function() {
        var t;
        t = this;
        $(t).parent().addClass('hover').addClass(NS + '-hover');
      });
      root.on('mouseleave', NSclass + 'img', function() {
        $(this).removeClass('hover').removeClass(NS + '-hover');
      });
    }
  };

  MMG.Templates.Classica.ie9 = {};


  /*
  Template for IE9
   */

  MMG.Templates.Classica.ie9.template = "<div class='<%=meta.NS %>-img <%= data.classList %>' data-image-id='<%= imageId %>'> <a class='<%=meta.NS %>-link' href='<%= data.pageHref %>' target='_blank'> <div class='<%=meta.NS %>-icon-wrapper <%=meta.NS %>-fs'> <div class='<%=meta.NS %>-icon-container <%=meta.NS %>-fs'> <img class='<%=meta.NS %>-icon <%=meta.NS %>-fs' src='<%= data.src %>'> </div> </div> <div class='<%=meta.NS %>-caption-wrapper'> <div class='<%=meta.NS %>-f-caption'> <% if(data.title) { %> <div class='<%=meta.NS %>-title'> <%= data.title %> </div> <% } %> <% if(data.description) { %> <div class='<%=meta.NS %>-descr'> by <%= data.description %> </div> <% } %> </div> </div> </a> <img data-src='<%= data.ownerIcon %>' src='' style='width:1px;height:1px;z-index:0;visibility:hidden;' class='swipe-owner-icon-hidden'> </div>";


  /*
  Callback for IE9
   */

  MMG.Templates.Classica.ie9.callback = function() {
    var NS, NSclass, loadIcon, root;
    NS = this.model.meta.NS;
    NSclass = this.model.meta.NSclass;
    root = this.model.meta.root;
    loadIcon = function($item) {
      var $icon;
      $icon = $item.find('.swipe-owner-icon-hidden');
      $icon.attr('src', $icon.attr('data-src'));
    };
    $(root).on('click', '.mmg-img', function(e) {
      var $this;
      $this = $(this);
      loadIcon($this);
      loadIcon($this.next());
      loadIcon($this.prev());
    });
    root.on('mouseenter', NSclass + 'img', function() {
      $(NSclass + 'caption-wrapper', this).fadeIn();
    });
    root.on('mouseleave', NSclass + 'img', function() {
      $(NSclass + 'caption-wrapper', this).fadeOut();
    });
  };


  /*
  Defaults options
   */

  MMG.Templates.Classica.defaults = {
    templateName: 'Classica',
    gridClass: 'classica'
  };

}).call(this);
