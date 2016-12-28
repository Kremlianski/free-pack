###
#
# Classica Template
#
###

MMG = window.MMG  
  
MMG.Templates.Classica = {}


###
General Template
###
MMG.Templates.Classica.template =

"
<div class='<%=meta.NS %>-img <%= data.classList %>'
data-image-id='<%= imageId %>'>
  <a class='<%=meta.NS %>-link' href='<%= data.pageHref %>' target='_blank'>

  </a>
  <div class='<%=meta.NS %>-icon-wrapper <%=meta.NS %>-fs'>
    <div class='<%=meta.NS %>-icon-container <%=meta.NS %>-fs'>
      <img class='<%=meta.NS %>-icon <%=meta.NS %>-fs' src='<%= data.src %>'>
    </div>
  </div>
  <div class='<%=meta.NS %>-caption-wrapper'>
    <div class='<%=meta.NS %>-f-caption'>
<% if(data.title) { %>
      <div class='<%=meta.NS %>-title'>
        <%= data.title %>
      </div>
<% } %>
<% if(data.description) { %>
      <div class='<%=meta.NS %>-descr'>
        by <%= data.description %>
      </div>
<% } %>
    </div>
  </div>
  <div class='<%=meta.NS %>-shutter'></div>
  <img data-src='<%= data.ownerIcon %>' src='' style='width:1px;height:1px;z-index:0;visibility:hidden;' class='swipe-owner-icon-hidden'>
</div>
"

###
General Callback
###
MMG.Templates.Classica.callback= ->

  NS = @model.meta.NS
  NSclass = @model.meta.NSclass
  root = @model.meta.root
  isMobile = @model.meta.isMobile

  root.addClass(NS+'-classica')
  
  loadIcon = ($item) ->
    $icon = $item.find '.swipe-owner-icon-hidden'
    $icon.attr 'src', $icon.attr('data-src')
    return
    
  $(root).on 'click', '.mmg-img', (e) ->
    
    $this = $ @
    loadIcon($this)
    loadIcon($this.next())
    loadIcon($this.prev())

    return

  ###*
  #
  # Removes 'hover' classes
  #
  ###
  _removeHover = ->
    $(NSclass + 'hover, .hover', root.get(0)).each ->
      $(this).removeClass('hover').removeClass NS + '-hover'
      return

    return


  if isMobile
  
    ###
    this block is used to simulate effects
    on mobile devices
    ###
    events = 'touchstart'
    if /IEMobile/i.test(navigator.userAgent)
      events = 'MSPointerDown mouseenter'
    $('body').on events, (event) ->
      target = $(event.target)
      if $(event.target).hasClass(NS + '-shutter')
        image = target.parent()
        if !image.hasClass(NS + '-hover')
          _removeHover()
          image.addClass NS + '-hover'

          setTimeout (->
            image.addClass 'hover'

            image = null
            return
          ), 500
      else
        if !$(event.target).hasClass(NS + '-link')
          _removeHover()

      return

  else
  
    ###
    not mobile devices
    ###
    root.on 'mouseenter', NSclass + 'img ' + NSclass + 'shutter', ->
      t = this
      $(t).parent().addClass('hover').addClass NS + '-hover'
      return
    root.on 'mouseleave', NSclass + 'img', ->
      $(this).removeClass('hover').removeClass NS + '-hover'
      return
  return




MMG.Templates.Classica.ie9 = {}


###
Template for IE9
###
MMG.Templates.Classica.ie9.template =
"
<div class='<%=meta.NS %>-img <%= data.classList %>'
data-image-id='<%= imageId %>'>
  <a class='<%=meta.NS %>-link' href='<%= data.pageHref %>' target='_blank'>
    <div class='<%=meta.NS %>-icon-wrapper <%=meta.NS %>-fs'>
      <div class='<%=meta.NS %>-icon-container <%=meta.NS %>-fs'>
        <img class='<%=meta.NS %>-icon <%=meta.NS %>-fs' src='<%= data.src %>'>
      </div>
    </div>
    <div class='<%=meta.NS %>-caption-wrapper'>
      <div class='<%=meta.NS %>-f-caption'>

<% if(data.title) { %>
      <div class='<%=meta.NS %>-title'>
        <%= data.title %>
      </div>
<% } %>
<% if(data.description) { %>
      <div class='<%=meta.NS %>-descr'>
        by <%= data.description %>
      </div>
<% } %>
      </div>
    </div>
  </a>
  <img data-src='<%= data.ownerIcon %>' src='' style='width:1px;height:1px;z-index:0;visibility:hidden;' class='swipe-owner-icon-hidden'>
</div>
"

###
Callback for IE9
###
MMG.Templates.Classica.ie9.callback = ->

  NS = @model.meta.NS
  NSclass = @model.meta.NSclass
  root = @model.meta.root
  
  loadIcon = ($item) ->
    $icon = $item.find '.swipe-owner-icon-hidden'
    $icon.attr 'src', $icon.attr('data-src')
    return
    
  $(root).on 'click', '.mmg-img', (e) ->
    
    $this = $ @
    loadIcon($this)
    loadIcon($this.next())
    loadIcon($this.prev())

    return

  root.on 'mouseenter', NSclass + 'img', ->
    $(NSclass+'caption-wrapper', this).fadeIn()
    return

  root.on 'mouseleave', NSclass + 'img', ->
    $(NSclass+'caption-wrapper', this).fadeOut()
    return
  return


###
Defaults options
###
MMG.Templates.Classica.defaults =
  templateName: 'Classica'
  gridClass: 'classica'