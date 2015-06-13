$(document).ready(function () {
// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('0c5f277549234932320bfd7f15ad8f4806af4a6e1ea41737eb908b2b219d5fae');

$.jribbble.users('sananes').shots().then(function(res) {
  var html = [];
  html.push('')
  res.forEach(function(shot) {
  	html.push('')
    html.push('<li style="list-style:none" class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  html.push('')
  $('.dribbble-shots').html(html.join(''));
});
 });