/**
 * Created by alexei.chekulaev on 11/11/13.
 */

$.widget('tabsPane.historyPane', {
  options : {
    filter : ''
  },
  list : $('<div/>'),
  _create: function() {
    this.element.html('<h1><img src="chrome://favicon/size/16@2x/chrome://history/" /></h1><div id="historyList"></div>');
    this.list = $('#historyList', this.element);
    this._setOption('filter', '');
  },
  _setOption: function(key, value) {
    this.options[key] = value;

    switch (key) {
      case 'filter':
        var startTime = new Date();
        var widget = this;
        var itemSkeleton =
          '<div class="historyItem">' +
            '<img src="{2}" style="width:16px;height:16px" />' +
            '<a href="{0}">{1}</a>&nbsp;&dash;&nbsp;<a href="{0}" class="grey">{0}</a>' +
          '</div>';

        startTime.setFullYear(startTime.getFullYear(), startTime.getMonth() - 3); //TODO move 'time ago' to options

        chrome.history.search(
          {
            text: value,
            startTime: startTime.getTime(),
            endTime: Date.now(),
            maxResults: 10
          },
          function(items) {
            widget._clear();
            $.each(items, function(index, item) {
              widget.list.append(
                itemSkeleton.format(
                  item.url,
                  item.title ? item.title : '[No Title]',
                  'chrome://favicon/size/16@1x/' + item.url
                )
              );
            });
          });
        this._trigger("onFilter", null, {filter: this.options.filter});
        break;
      default:
        break
    }
  },
  _clear: function() {
    this.list.html('');
  }
});
