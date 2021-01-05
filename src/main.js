{{#with monitor}}
import yayaMonitor from 'yaya-monitor';
{{/with}}

{{#with monitor}}
yayaMonitor.install({
  debug: true,
  key: {{authKey}}
});
{{/with}}
